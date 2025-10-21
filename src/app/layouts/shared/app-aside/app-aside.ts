import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { LinkButton } from '@app/shared/ui/link-button/link-button';

@Component({
  selector: 'app-aside',
  imports: [LinkButton],
  templateUrl: './app-aside.html',
  styleUrl: './app-aside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAside {
  menuItems = input<CatalogItem[]>();
}
