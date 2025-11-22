import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();
app.use(express.json());


/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

let npmCache: any = null;
let lastUpdated = 0;
const WEEK = 7 * 24 * 60 * 60 * 1000;

async function getNpmData( packages : string[]) {
  const now = Date.now();

  // Si el cache es válido, devuélvelo
  if (npmCache && (now - lastUpdated) < WEEK) {
    return npmCache;
  }

  console.log('Haciendo peticiones');
  const results = await Promise.all(
    packages.map(p =>
      fetch(`${p}`)
        .then(r => r.json())
        .catch(() => ({ downloads: 0 }))
    )
  );

  npmCache = {
    total: results.reduce((sum, x) => sum + x.downloads, 0),
    updated: new Date().toISOString()
  };

  lastUpdated = now;
  return npmCache;
}

// === ENDPOINT REAL ===
app.post("/npm-stats", async (req, res) => {
  const { urls } = req.body;
  const data = await getNpmData(urls);
  res.json(data);
});


/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
