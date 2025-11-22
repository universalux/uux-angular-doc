import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./core/components/app-header/app-header";
import { MenuService } from './core/services/menu-service/menu-service';
import { ResponsiveMenu } from "./core/components/responsive-menu/responsive-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, ResponsiveMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {

  menuService = inject(MenuService);

}
