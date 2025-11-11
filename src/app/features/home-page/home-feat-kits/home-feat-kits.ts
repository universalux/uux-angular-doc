import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';
import { CatalogItem } from '@app/core/data/data.types';
import { NgLinkButton } from "ng-link-button";
import { kitList } from '@app/core/data/kits.data';
import { NgContentCard } from 'ng-content-card';

@Component({
  selector: 'app-home-feat-kits',
  imports: [NgContentCarousel, ContentCarouselItemDirective, NgContentCard, NgLinkButton],
  templateUrl: './home-feat-kits.html',
  styleUrl: './home-feat-kits.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatKits {
  featuredKits = signal<CatalogItem[] | null>(kitList);
}
