import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { componentList } from '@app/core/data/components.data';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  router = inject(Router);
  componentList = signal<CatalogItem[]>(componentList);
  currentComponent = signal<string | null>(null);
  isDoc = signal<boolean>(false);
  isPlayground = signal<boolean>(true);

  updateComponentFromUrl(item: string, section: string){
    this.currentComponent.set(item);

    if(section === 'documentation'){
      this.isDoc.set(true);
      this.isPlayground.set(false);
    }else if(section === 'playground'){
      this.isDoc.set(false);
      this.isPlayground.set(true);
    }
  };
}
