import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AppHeader } from "./core/components/app-header/app-header";
import { MenuService } from './core/services/menu-service/menu-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  menuService = inject(MenuService);
  private router = inject(Router);

  protected readonly title = signal('uux-angular-doc');

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.menuService.isOpenMenu.set(false);
      })
  }
}
