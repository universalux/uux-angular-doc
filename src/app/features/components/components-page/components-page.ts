import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { componentList } from '@app/core/data/components.data';
import { CatalogItem } from '@app/core/data/data.types';
import { NgImageCard } from 'ng-image-card';

@Component({
  selector: 'app-components-page',
  imports: [NgImageCard, RouterLink],
  templateUrl: './components-page.html',
  styleUrl: './components-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPage {
  components = signal<CatalogItem[]>(componentList);
}
