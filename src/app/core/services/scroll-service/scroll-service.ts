import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  router = inject(Router);

  getPageLayer(page: string) : string{
    if(page === 'components'){
      return 'app-components-layout';
    }else if(page === 'kits'){
      return 'app-kits-layout';
    }else{
      return 'app-main-layout';
    };
  };

  resetScroll(page: string){

    const layout = this.getPageLayer(page);

    const container = document.querySelector(layout);

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  enableAnchorNavigations(page: string, fragment: string){
    let layout : string;
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
    };

    const el = document.getElementById(fragment);
    const container = document.querySelector(layout);
    el?.focus();
    if (el && container) {
      container.scrollTo({
        top: el.offsetTop - margin,
        behavior: behavior,
      });
    }
  };

  activeSection = signal<string | null>(null);

  updateActive(sectionId: string, isVisible: boolean) {
    if ( isVisible) {
      this.activeSection.set(sectionId);
    }
  }
}
