import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuService } from '@app/core/services/menu-service/menu-service';
import { NgMenuToggle } from 'ng-menu-toggle';
import { NgLinkButton } from "ng-link-button";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-responsive-menu',
  imports: [NgMenuToggle, NgLinkButton],
  templateUrl: './responsive-menu.html',
  styleUrl: './responsive-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveMenu {
  menuService = inject(MenuService);
  activatedRoute = inject(ActivatedRoute);

}
