import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogItem } from '@app/core/data/data.types';
import { NgImageCard } from 'ng-image-card';

@Component({
  selector: 'app-card-list',
  imports: [RouterLink, NgImageCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardList {
  catalogItems = input<CatalogItem[] | null>();
}
