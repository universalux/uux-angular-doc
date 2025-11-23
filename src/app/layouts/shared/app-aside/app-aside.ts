import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { NgLinkButton } from "ng-link-button";

@Component({
  selector: 'app-aside',
  imports: [NgLinkButton],
  templateUrl: './app-aside.html',
  styleUrl: './app-aside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAside {
  menuItems = input<CatalogItem[]>();
  // menuService = inject(MenuService);
}
