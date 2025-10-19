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
  private firstRender = false;

   /** LIFE CYCLE */

  constructor(){
    if(this.isBrowser){
      if(!this.firstRender){
        effect(() => {
          const mode = this.theme();
          document.documentElement.classList.toggle('light', mode === 'light');
          // this.setThemeColor(mode === 'light' ? '#ffffff' : '#000000');
          this.firstRender = false;
        })
      }
    }
  }

  /** METHODS */

  toggleTheme(){
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  // private setThemeColor(color: string) {
  //   let themeMeta = this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  //   if (themeMeta) {
  //     themeMeta.setAttribute('content', color);
  //   }
  // }

}
