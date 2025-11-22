import { inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { filter } from 'rxjs';
import { componentList } from '@app/core/data/components.data';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  router = inject(Router);
  componentList = signal<CatalogItem[]>(componentList);
  currentComponent = signal<string | null>(null);
  isDoc = signal<boolean>(false);
  isPlayground = signal<boolean>(true);

  constructor() {
    // Detecting initial route
    this.updateFromUrl(this.router.url);

    // Listen navigations
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateFromUrl(this.router.url);
      });
  }

  // Determine current component and doc or pg section by url
  private updateFromUrl(url: string): void {
    const cleanUrl = url.split('#')[0];
    const segments = cleanUrl.split('/').filter(Boolean);
    const componentName = segments[1] ?? null;
    const lastSegment = segments.at(-1);

    this.currentComponent.set(componentName);

    if(lastSegment === 'documentation'){
      this.isDoc.set(true);
      this.isPlayground.set(false);
    }else if(lastSegment === 'playground'){
      this.isDoc.set(false);
      this.isPlayground.set(true);
    }

  };
}
