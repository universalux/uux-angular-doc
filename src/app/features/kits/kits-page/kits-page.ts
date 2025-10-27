import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { kitList } from '@app/core/data/kits.data';
import { CardList } from '@app/shared/ui/card-list/card-list';

@Component({
  selector: 'app-kits-page',
  imports: [CardList],
  templateUrl: './kits-page.html',
  styleUrl: './kits-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsPage {
  kits = signal<CatalogItem[]>(kitList);
}
