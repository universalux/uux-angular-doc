import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgContentCarousel, CarouselItemDirective } from 'ng-content-carousel';
import { NgImageCard } from 'ng-image-card';
import { CatalogItem } from '@app/core/data/data.types';
import { NgLinkButton } from "ng-link-button";
import { RouterLink } from "@angular/router";
import { kitList } from '@app/core/data/kits.data';

@Component({
  selector: 'app-home-feat-kits',
  imports: [NgContentCarousel, CarouselItemDirective, NgImageCard, NgLinkButton, RouterLink],
  templateUrl: './home-feat-kits.html',
  styleUrl: './home-feat-kits.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatKits {
  featuredKits = signal<CatalogItem[] | null>(kitList);
}
