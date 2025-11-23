import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MenuService } from '../menu-service/menu-service';
import { ComponentService } from '../component-service/component-service';
import { KitService } from '../kit-service/kit-service';
import { ScrollService } from '../scroll-service/scroll-service';
import { DocService } from '../doc-service/doc-service';

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
  private docService = inject(DocService);

  // Current router data
  routePage = signal<string | null>(null);
  routeItem = signal<string | null>(null);
  routeSection = signal<string | null>(null);
  routeFragment = signal<string | null>(null);
  routeChange = signal<'page' | 'item' | 'section' |'fragment' | null>(null);

  // Last router data
  private lastUrl: string | null = null;
  private lastPage: string | null = null;
  private lastItem: string | null = null;
  private lastSection: string | null = null;
  private lastFragment: string | null = null;

  private pageChange : boolean = false;
  private sectionChange : boolean = false;
  private itemChange : boolean = false;


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

        // Setting router signals from url data
        this.setRouterSignals({page, item, section, fragment});

        // COMPONENTS HANDLER
        if(page === 'components') this.componentService.updateComponentFromUrl(item, section);

        // KITS HANDLER
        if(page === 'kits') this.kitService.currentKit.set(item);

        //DOC SECTIONS
        if(page === 'components' || page === 'kits')this.docService.setDocSections(page);

        // ----- MENU HANDLERS
        this.menuService.isOpenMenu.set(false);
        this.menuService.setMenuCustomAria(page);
        this.menuService.setMenuSignals(page);

        // ANCHOR NAVIGATION HANDLER
        if(fragment && this.routeChange() === 'fragment'){
          this.scrollService.enableAnchorNavigations(page, fragment);
        };

        if(this.isBrowser && this.routeChange() === 'item'){
          console.log('reset scroll');
          this.scrollService.resetScroll(page);
        };

        // ----- FOCUS HANDLER
        if(this.isBrowser && this.lastUrl !== url && !fragment && this.routeChange() !== 'section'){
          const el = document.querySelector('main');
          setTimeout(() =>  el?.focus(), 0);
        };

        // Set last router properties
        this.lastUrl = url;
        this.lastItem = item;
        this.lastPage = page;
        this.lastSection = section;
        this.lastFragment = fragment;

      });
  };

  setRouterSignals({page, item, section, fragment} : RouterSignals) {
    this.routePage.set(page);
    this.routeItem.set(item);
    this.routeSection.set(section);
    this.routeFragment.set(fragment);

    if(this.lastPage !== page){
      this.routeChange.set('page');
    }else if(this.lastItem !== item){
      this.routeChange.set('item');
    }else if(this.lastSection !== section){
      this.routeChange.set('section');
    }else if(this.lastFragment !== fragment){
      this.routeChange.set('fragment');
    }

    if(this.lastItem === item && this.lastSection !== section){
      this.sectionChange = true;
    };

  };

}
