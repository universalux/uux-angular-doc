import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { filter } from 'rxjs';
import { KitService } from '../kit-service/kit-service';
import { ComponentService } from '../component-service/component-service';
import { MenuToggleCustomAria } from 'ng-menu-toggle';

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

  // page = signal<'components' |'kits' | null>(null);

  menuCustomAria = signal<MenuToggleCustomAria>({});

  private lastUrl: string | null = null;

  private lastPage: string | null = null;
  private lastItem: string | null = null;
  private lastSection: string | null = null;
  private sectionChange : boolean = false;

  constructor() {
    // Closing menu when resizing
    if(this.isBrowser){
      window.addEventListener('resize', () => {
        this.isOpenMenu.set(false);
      });
    };

    // Subscribing to router events
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        const url = (event as NavigationEnd).urlAfterRedirects;
        const fragment = this.router.parseUrl(this.router.url).fragment;

        const cleanUrl = url.split('#')[0];
        const segments = cleanUrl.split('/').filter(Boolean);
        const currentPage = segments[0] ?? null;
        const currentItem = segments[1] ?? null;
        const currentSection = segments[2] ?? null;

        // console.log(' ---------- Clean url: ', cleanUrl);
        // console.log('CurrentPage : ', currentPage);
        // console.log('CurrentItem : ', currentItem);
        // console.log('CurrentSection : ', currentSection);
        // console.log('Fragment: ', fragment);

        if(this.lastItem === currentItem && this.lastSection !== currentSection){
          this.sectionChange = true;
        }


        // Close the menu when navigate
        this.isOpenMenu.set(false);

        // Render menu only in this routes
        if (url.startsWith('/components')) {
          this.menuCustomAria.set({
            ariaLabelOpened: `Close components menu`,
            ariaLabelClosed: `Open components menu`
          });
          this.renderMenu.set(true);
          this.menuItems.set(this.componentService.componentList());

        }else if (url.startsWith('/kits')) {
          this.menuCustomAria.set({
            ariaLabelOpened: `Close kits menu`,
            ariaLabelClosed: `Open kits menu`
          });
          this.renderMenu.set(true);
          this.menuItems.set(this.kitService.kitList());

        } else {
          this.renderMenu.set(false);
          this.menuItems.set([]);
        }

        if(this.isBrowser && this.lastUrl !== url && !fragment && !this.sectionChange){
          const el = document.querySelector('main');
          setTimeout(() =>  el?.focus(), 0);
        };

        this.lastUrl = url;
        this.lastItem = currentItem;
        this.lastPage = currentPage;
        this.lastSection = currentSection;
      });

  };

}
