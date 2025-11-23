import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { kitList } from '@app/core/data/kits.data';

@Injectable({
  providedIn: 'root'
})
export class KitService {
  router = inject(Router);

  kitList = signal<CatalogItem[]>(kitList);
  currentKit= signal<string | null>(null);

}
