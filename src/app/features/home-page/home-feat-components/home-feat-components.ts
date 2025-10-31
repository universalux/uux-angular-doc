import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgContentCarousel, CarouselItemDirective } from 'ng-content-carousel';
import { NgImageCard } from 'ng-image-card';
import { CatalogItem } from '@app/core/data/data.types';
import { componentList } from '@app/core/data/components.data';
import { LinkButton } from "@app/shared/ui/link-button/link-button";

@Component({
  selector: 'app-home-feat-components',
  imports: [NgContentCarousel, CarouselItemDirective, NgImageCard, LinkButton],
  templateUrl: './home-feat-components.html',
  styleUrl: './home-feat-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatComponents {
  featuredComponents = signal<CatalogItem[]>(componentList);
}
