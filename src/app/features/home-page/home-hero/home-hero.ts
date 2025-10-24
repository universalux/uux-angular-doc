import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LinkButton } from '@app/shared/ui/link-button/link-button';
import { CarouselItem, NgHeroCarousel, SlideForDirective } from 'ng-hero-carousel';

const slides : CarouselItem[] = [
  {
    // title: 'Angular components library',
    // subtitle: 'Angular components libreary'
  },
  {
    // title: 'Slide 2',
    // subtitle: 'Slide 2 description'
  },
  {
    // title: 'Slide 2',
    // subtitle: 'Slide 2 description'
  },
]

@Component({
  selector: 'app-home-hero',
  imports: [NgHeroCarousel, SlideForDirective, LinkButton],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHero {

  carouselItems = signal<CarouselItem[]>(slides);

}
