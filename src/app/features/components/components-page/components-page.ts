import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { componentList } from '@app/core/data/components.data';
import { CatalogItem } from '@app/core/data/data.types';
import { CardList } from "@app/shared/ui/card-list/card-list";

@Component({
  selector: 'app-components-page',
  imports: [CardList],
  templateUrl: './components-page.html',
  styleUrl: './components-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPage {
  components = signal<CatalogItem[]>(componentList);
}
