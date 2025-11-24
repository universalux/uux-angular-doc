import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface MetaTagsConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
};

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  private meta = inject(Meta);
  private title = inject(Title);

  baseUrl = signal<string>('https://universalux.dev');

  setMetaTags(config: MetaTagsConfig){
    if (config.title) {
      this.title.setTitle(config.title);
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
    }

    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords});
    }

    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
    }

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl()}${config.image}` });
      this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl()}${config.image}` });
    }

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl()}${config.url}` });
      this.meta.updateTag({ name: 'twitter:url', content: `${this.baseUrl()}${config.url}` });
    }

    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
  }
}
