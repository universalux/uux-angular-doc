import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AppHeader } from "./core/components/app-header/app-header";
import { MenuService } from './core/services/menu-service/menu-service';
import { filter } from 'rxjs';
import { componentList } from './core/data/components.data';
import { CatalogItem } from './core/data/data.types';
import { kitList } from './core/data/kits.data';
import { ResponsiveMenu } from "./core/components/responsive-menu/responsive-menu";
import { LinkButton } from './shared/ui/link-button/link-button';
import { AppFooter } from './core/components/app-footer/app-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, ResponsiveMenu, LinkButton, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  menuService = inject(MenuService);
  private router = inject(Router);
  menuItems = signal<CatalogItem[]>([]);
  renderMenu = signal<boolean>(false);

  protected readonly title = signal('uux-angular-doc');

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        // Close the menu when navigate
        this.menuService.isOpenMenu.set(false);

        // Render menu only in this routes
        if (url.startsWith('/components')) {
          this.renderMenu.set(true);
          this.menuItems.set(componentList);
        }else if (url.startsWith('/kits')) {
          this.renderMenu.set(true);
          this.menuItems.set(kitList);
        } else {
          this.renderMenu.set(false);
          this.menuItems.set([]);
        }
      })
  }
}
