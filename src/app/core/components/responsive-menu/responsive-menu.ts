import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { LinkButton } from '@app/shared/ui/link-button/link-button';
import { NgMenuButton } from 'ng-menu-button';

@Component({
  selector: 'app-responsive-menu',
  imports: [LinkButton, NgMenuButton],
  templateUrl: './responsive-menu.html',
  styleUrl: './responsive-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveMenu {
  menuService = inject(MenuService);
  menuItems = input<CatalogItem[]>();
}
