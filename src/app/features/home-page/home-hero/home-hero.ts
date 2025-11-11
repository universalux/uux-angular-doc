import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeroCarouselItem, NgHeroCarousel, SlideForDirective } from 'ng-hero-carousel';
import { NgLinkButton } from "ng-link-button";

const slides : HeroCarouselItem[] = [
  {},
  {},
  {},
];

@Component({
  selector: 'app-home-hero',
  imports: [NgHeroCarousel, SlideForDirective, NgLinkButton],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHero {

  carouselItems = signal<HeroCarouselItem[]>(slides);

}
