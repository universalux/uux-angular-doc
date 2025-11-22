import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';
import { NgLinkButton } from "ng-link-button";
import { NgContentCard } from 'ng-content-card';
import { KitService } from '@app/core/services/kit-service/kit-service';

@Component({
  selector: 'app-home-feat-kits',
  imports: [NgContentCarousel, ContentCarouselItemDirective, NgContentCard, NgLinkButton],
  templateUrl: './home-feat-kits.html',
  styleUrl: './home-feat-kits.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFeatKits {
  kitService = inject(KitService);
}
