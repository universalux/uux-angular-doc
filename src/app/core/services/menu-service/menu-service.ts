import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { filter } from 'rxjs';
import { KitService } from '../kit-service/kit-service';
import { ComponentService } from '../component-service/component-service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private router = inject(Router);
  kitService = inject(KitService);
  componentService = inject(ComponentService);

  menuItems = signal<CatalogItem[]>([]);
  renderMenu = signal<boolean>(false);
  isOpenMenu = signal<boolean>(false);

  constructor() {
    if(this.isBrowser){
      window.addEventListener('resize', () => {
        this.isOpenMenu.set(false);
      });
    };

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        // Close the menu when navigate
        this.isOpenMenu.set(false);

        // Render menu only in this routes
        if (url.startsWith('/components')) {
          this.renderMenu.set(true);
          this.menuItems.set(this.componentService.componentList());
        }else if (url.startsWith('/kits')) {
          this.renderMenu.set(true);
          this.menuItems.set(this.kitService.kitList());
        } else {
          this.renderMenu.set(false);
          this.menuItems.set([]);
        }
      });

  };

}
