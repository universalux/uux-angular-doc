import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgLinkButton } from "ng-link-button";
import { DocNav } from "@app/layouts/shared/doc-nav/doc-nav";
import { filter } from 'rxjs';

@Component({
  selector: 'app-component-layout',
  imports: [NgLinkButton, RouterOutlet, DocNav],
  templateUrl: './component-layout.html',
  styleUrl: './component-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentLayout implements OnInit {

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  currentComponent = signal<string | null>(null);
  isDoc = signal<boolean>(false);

  ngOnInit(): void {
    // Evaluar inmediatamente al cargar
    this.updateFromUrl(this.router.url);

    // Escuchar cambios de navegación posteriores
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
    this.isDoc.set(lastSegment === 'documentation');
  }

}
