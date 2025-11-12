import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  router = inject(Router);

  enableAnchorNavigation(
    layout:
      | 'app-main-layout'
      | 'app-components-layout'
      | 'app-kits-layout' = 'app-components-layout'
  ) {
    const margin = layout === 'app-main-layout' ? 0 : 64;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const el = document.getElementById(fragment);
          const container = document.querySelector(layout);
          if (el && container) {
            container.scrollTo({
              top: el.offsetTop - margin,
              behavior: 'smooth',
            });
          }
        }
      });
  }
}
