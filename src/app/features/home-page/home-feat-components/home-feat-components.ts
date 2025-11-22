import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';
import { CatalogItem } from '@app/core/data/data.types';
import { NgLinkButton } from "ng-link-button";
import { NgContentCard } from 'ng-content-card';
import { ComponentService } from '@app/core/services/component-service/component-service';

@Component({
  selector: 'app-home-feat-components',
  imports: [NgContentCarousel, ContentCarouselItemDirective, NgContentCard, NgLinkButton],
  templateUrl: './home-feat-components.html',
  styleUrl: './home-feat-components.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatComponents {
  componentService = inject(ComponentService);
  featuredComponents = signal<CatalogItem[] | null>(
    this.componentService.componentList().filter(c => c.featured).reverse()
  );
}
