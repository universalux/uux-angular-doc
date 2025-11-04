import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
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
}
