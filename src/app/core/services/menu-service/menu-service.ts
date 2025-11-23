import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { KitService } from '../kit-service/kit-service';
import { ComponentService } from '../component-service/component-service';
import { MenuToggleCustomAria } from 'ng-menu-toggle';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  kitService = inject(KitService);
  componentService = inject(ComponentService);

  menuItems = signal<CatalogItem[]>([]);
  renderMenu = signal<boolean>(false);
  isOpenMenu = signal<boolean>(false);

  menuCustomAria = signal<MenuToggleCustomAria>({});

  constructor() {
    // Closing menu when resizing
    if(this.isBrowser){
      window.addEventListener('resize', () => {
        this.isOpenMenu.set(false);
      });
    };

  };

  setMenuCustomAria(page: string){
    this.menuCustomAria.set({
      ariaLabelOpened: `Close ${page} menu`,
      ariaLabelClosed: `Open ${page} menu`
    });
  };

  setMenuSignals(page: string){

    if(page === 'components' || page === 'kits'){
      this.renderMenu.set(true);
    }else{
      this.renderMenu.set(false);
    };

    if(page === 'components'){
      this.menuItems.set(this.componentService.componentList());
    }else if(page === 'kits'){
      this.menuItems.set(this.kitService.kitList());
    } else{
      this.menuItems.set([]);
    };

  };

}
