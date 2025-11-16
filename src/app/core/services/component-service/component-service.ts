import { inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  router = inject(Router);

  currentComponent = signal<string | null>(null);
  isDoc = signal<boolean>(false);
  isPlayground = signal<boolean>(true);

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
    const componentName = segments[1] ?? null;
    const lastSegment = segments.at(-1);

    this.currentComponent.set(componentName);

    if(lastSegment === 'documentation'){
      this.isDoc.set(true);
      this.isPlayground.set(false);
    }else if(lastSegment === 'playground'){
      this.isDoc.set(false);
      this.isPlayground.set(true);
    }

  }
}
