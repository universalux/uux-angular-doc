import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuService } from '../menu-service/menu-service';
import { ComponentService } from '../component-service/component-service';
import { KitService } from '../kit-service/kit-service';
import { ScrollService } from '../scroll-service/scroll-service';

type RouterSignals = {
  page: string | null;
  item: string | null;
  section: string | null;
  fragment: string | null;
};

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private router = inject(Router);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private menuService = inject(MenuService);
  private componentService = inject(ComponentService);
  private kitService = inject(KitService);
  private scrollService = inject(ScrollService);

  // Current router data
  page = signal<string | null>(null);
  item = signal<string | null>(null);
  section = signal<string | null>(null);
  fragment = signal<string | null>(null);

  // Last router data
  private lastUrl: string | null = null;
  private lastPage: string | null = null;
  private lastItem: string | null = null;
  private lastSection: string | null = null;
  private sectionChange : boolean = false;

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        // Getting clean url
        const url = (event as NavigationEnd).urlAfterRedirects;
        const cleanUrl = url.split('#')[0];

        // Getting data from url
        const segments = cleanUrl.split('/').filter(Boolean);
        const page = segments[0] ?? null;
        const item = segments[1] ?? null;
        const section = segments[2] ?? null;
        const fragment = this.router.parseUrl(this.router.url).fragment;

        if(fragment){
          console.log(fragment);
        }

        // Setting router signals from url data
        this.setRouterSignals({page, item, section, fragment});

        // COMPONENTS HANDLER
        this.componentService.updateComponentFromUrl(item, section);

        // KITS HANDLER
        this.kitService.currentKit.set(item);

        // ----- MENU HANDLERS
        this.menuService.isOpenMenu.set(false);
        this.menuService.setMenuCustomAria(page);
        this.menuService.setMenuSignals(page);

        // ANCHOR NAVIGATION HANDLER
        if(fragment){
          this.scrollService.enableAnchorNavigations(page, fragment);
        };

        // ----- FOCUS HANDLER
        if(this.isBrowser && this.lastUrl !== url && !fragment && !this.sectionChange){
          const el = document.querySelector('main');
          setTimeout(() =>  el?.focus(), 0);
        };

        // Set last router properties
        this.lastUrl = url;
        this.lastItem = item;
        this.lastPage = page;
        this.lastSection = section;

      });
  };

  setRouterSignals({page, item, section, fragment} : RouterSignals) {
    this.page.set(page);
    this.item.set(item);
    this.section.set(section);
    this.fragment.set(fragment);

    if(this.lastItem === item && this.lastSection !== section){
      this.sectionChange = true;
    };
  };

}
