import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CarouselItem, NgHeroCarousel, SlideForDirective } from 'ng-hero-carousel';
import { NgLinkButton } from "ng-link-button";

const slides : CarouselItem[] = [
  {},
  {},
  {},
]

@Component({
  selector: 'app-home-hero',
  imports: [NgHeroCarousel, SlideForDirective, NgLinkButton],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHero {

  carouselItems = signal<CarouselItem[]>(slides);

}
