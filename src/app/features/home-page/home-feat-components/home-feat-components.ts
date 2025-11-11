import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';
import { CatalogItem } from '@app/core/data/data.types';
import { componentList } from '@app/core/data/components.data';
import { NgLinkButton } from "ng-link-button";
import { NgContentCard } from 'ng-content-card';

@Component({
  selector: 'app-home-feat-components',
  imports: [NgContentCarousel, ContentCarouselItemDirective, NgContentCard, NgLinkButton],
  templateUrl: './home-feat-components.html',
  styleUrl: './home-feat-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatComponents {
  featuredComponents = signal<CatalogItem[] | null>(componentList.filter(c => c.featured).reverse());
}
