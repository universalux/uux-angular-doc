import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { kitList } from '@app/core/data/kits.data';
import { NgContentCard } from 'ng-content-card';


@Component({
  selector: 'app-kits-page',
  imports: [NgContentCard, RouterLink],
  templateUrl: './kits-page.html',
  styleUrl: './kits-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsPage {
  kits = signal<CatalogItem[]>(kitList);
}
