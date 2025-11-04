import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { NgMenuToggle } from 'ng-menu-toggle';
import { NgLinkButton } from "ng-link-button";

@Component({
  selector: 'app-responsive-menu',
  imports: [NgMenuToggle, NgLinkButton],
  templateUrl: './responsive-menu.html',
  styleUrl: './responsive-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveMenu {
  menuService = inject(MenuService);
  menuItems = input<CatalogItem[]>();
}
