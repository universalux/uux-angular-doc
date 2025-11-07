import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { kitList } from '@app/core/data/kits.data';
import { NgImageCard } from 'ng-image-card';

@Component({
  selector: 'app-kits-page',
  imports: [NgImageCard, RouterLink],
  templateUrl: './kits-page.html',
  styleUrl: './kits-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsPage {
  kits = signal<CatalogItem[]>(kitList);
}
