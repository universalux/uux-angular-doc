import { inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { filter } from 'rxjs';
import { kitList } from '@app/core/data/kits.data';

@Injectable({
  providedIn: 'root'
})
export class KitService {
  router = inject(Router);

  kitList = signal<CatalogItem[]>(kitList);
  currentKit= signal<string | null>(null);

  constructor() {
    // Detectar ruta inicial
    this.updateFromUrl(this.router.url);

    // Escuchar navegaciones
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateFromUrl(this.router.url);
      });
  }

  private updateFromUrl(url: string): void {
    const cleanUrl = url.split('#')[0];
    const segments = cleanUrl.split('/').filter(Boolean);
    const kitName = segments[1] ?? null;

    this.currentKit.set(kitName);

  }
}
