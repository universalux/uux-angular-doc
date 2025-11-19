export const contentCardDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-content-card`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-content-card@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-content-card@v18-lts`,
  },
  overviewCode_1: {
    language: 'html',
    code: `
      <ng-content-card hover="both">
        <header card-header>
          Header Content
        </header>
        <section card-image>
          <img class="scaleHover" src="images/card/dog_post.png" alt="Dog">
        </section>
        <section card-body>
          Body content
        </section>
        <footer card-footer>
          Footer content
        </footer>
        <div absolute-content>
          Extra content
        </footer>
      </ng-content-card>
    `,
  },
  funcCode_1: {
    language: 'html',
    code: `
      <section card-image>
        <img class="scaleHover" src="images/card/dog_post.png" alt="Dog">
      </section>
    `,
  },
  stylingCode_1: {
    language: 'css',
    code: `
      ng-content-card {
        max-width: 280px;
        min-height: 400px;
        border: 3px solid white;
        border-radius: 3rem;
      }
    `
  },
  stylingCode_2: {
    language: 'css',
    code: `
      ng-content-card {
        --card-bg: white;
        --card-fg: black;
      }
    `
  },
  stylingCode_3: {
    language: 'css',
    code: `
      ng-content-card [card-header] {
        display: flex;
        align-items: center;
        column-gap: 1rem;
      }

      ng-content-card [card-header] img {
        width: 50px;
        border-radius: 50%;
      }

      ng-content-card [card-footer] {
        display: flex;
        column-gap: 0.5rem;
        justify-content: end;
      }
    `
  }
} as const;

export type ContentCardDocCode = typeof contentCardDocCode;
