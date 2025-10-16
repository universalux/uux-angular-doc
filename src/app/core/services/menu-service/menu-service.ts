import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isOpenMenu = signal<boolean>(false);

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    if(this.isBrowser){
      window.addEventListener('resize', () => {
        this.isOpenMenu.set(false);
      });
    }
  }

}
