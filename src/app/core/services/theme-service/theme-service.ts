import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  /** INJECTIONS */

  private document = inject(DOCUMENT);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** PROPERTIES */

  public theme = signal<'dark' | 'light'>('dark');
  public isDark = signal<boolean>(true);
  private firstRender = false;

   /** LIFE CYCLE */

  constructor(){
    if(this.isBrowser){
      if(!this.firstRender){
        effect(() => {
          const mode = this.isDark();
          document.documentElement.classList.toggle('light', !mode);
          this.firstRender = false;
        })
      }
    }
  }

  /** METHODS */

  toggleTheme(){
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }


}
