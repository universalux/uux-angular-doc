import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { RouterService } from '@app/core/services/router-service/router-service';
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
  routerService = inject(RouterService);
}
