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
    let margin : number = 0;
    if(layout === 'app-components-layout') margin = 64;
    if(layout === 'app-kits-layout') margin = 20;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const el = document.getElementById(fragment);
          const container = document.querySelector(layout);
          el?.focus();
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
