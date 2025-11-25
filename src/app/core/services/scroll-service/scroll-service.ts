import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

interface ScrollOptions {
  layout: string;
  margin: number;
  behavior:  ScrollBehavior | undefined;
};

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  router = inject(Router);

  getScrollOptions(page: string) : ScrollOptions{

    let layout = 'app-components-layout';
    let margin : number = 0;
    let behavior : ScrollBehavior | undefined = 'auto';
    if(page === 'components'){
      layout = 'app-components-layout';
      margin = 64;
    }else if(page === 'kits'){
      layout = 'app-kits-layout';
      margin = 25;
    }else{
      layout = 'app-main-layout';
      behavior = 'smooth';
      margin = 25;
    };

    return {layout, margin, behavior};
  };

  resetScroll(page: string){
    const scrollOptions = this.getScrollOptions(page);

    const container = document.querySelector(scrollOptions.layout);

    if (container) {
      setTimeout(() => {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }, 20);
    }
  };

  enableAnchorNavigations(page: string, fragment: string){
    const scrollOptions = this.getScrollOptions(page);

    const el = document.getElementById(fragment);
    const container = document.querySelector(scrollOptions.layout);
    el?.focus();
    if (el && container) {
      container.scrollTo({
        top: el.offsetTop - scrollOptions.margin,
        behavior: scrollOptions.behavior,
      });
    }
  };

  activeSection = signal<string | null>(null);

  updateActive(sectionId: string, isVisible: boolean) {
    if ( isVisible) {
      this.activeSection.set(sectionId);
    }
  };
}
