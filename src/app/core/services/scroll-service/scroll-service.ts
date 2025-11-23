import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  router = inject(Router);

  enableAnchorNavigations(page: string, fragment: string){
    let layout : string;
    let margin : number = 0;
    if(page === 'components'){
      layout = 'app-components-layout';
      margin = 64;
    }else if(page === 'kits'){
      layout = 'app-kits-layout';
      margin = 20;
    }else{
      layout = 'app-main-layout';
    };

    const el = document.getElementById(fragment);
    const container = document.querySelector(layout);
    el?.focus();
    if (el && container) {
      container.scrollTo({
        top: el.offsetTop - margin,
        behavior: 'smooth',
      });
    }
  };

  activeSection = signal<string | null>(null);

  updateActive(sectionId: string, isVisible: boolean) {
    if (isVisible) {
      this.activeSection.set(sectionId);
    }
  }
}
