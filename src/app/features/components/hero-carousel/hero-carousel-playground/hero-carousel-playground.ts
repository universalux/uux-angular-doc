import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { HeroCarouselCustomAria, HeroCarouselItem, HeroCarouselLangs, NgHeroCarousel, SlideForDirective } from "ng-hero-carousel";
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type HeroCarouselArrowsPlacement = 'auto'| 'down' | 'up';
type HeroCarouselIndicators = 'bars'| 'circles' | 'none';


@Component({
  selector: 'app-hero-carousel-playground',
  imports: [
    ...pgSharedImports,
    NgHeroCarousel, SlideForDirective
  ],
  templateUrl: './hero-carousel-playground.html',
  styleUrl: './hero-carousel-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCarouselPlayground implements OnInit {
  // ----- Component inputs -----

  // Slides input
  slidesObject = signal<HeroCarouselItem[]>([
    {
      image_url: 'assets/images/examples/ng-hero-carousel-slides/ng-hero-carousel_slide-1.webp',
      title: 'First Slide',
      subtitle: '1st slide subtitle'
    },
    {
      image_url: 'assets/images/examples/ng-hero-carousel-slides/ng-hero-carousel_slide-2.webp',
      title: 'ng-template + slideForDirective',
      subtitle: 'Here is an example of a button added as slide custom content'
    },
    {
      image_url: 'assets/images/examples/ng-hero-carousel-slides/ng-hero-carousel_slide-3.webp',
      title: 'ng-template + #outerContent',
      subtitle: 'You can also add custom content that remains visible across all slides (see doc)'
    },
  ]);

  // Style & Behavior Inputs
  hasOverlay = signal<boolean>(true);
  transitionTime = signal<number>(800);
  arrowsPlacement = signal<HeroCarouselArrowsPlacement>('auto');
  hasCounter = signal<boolean>(false);
  indicators = signal<HeroCarouselIndicators>('bars');

  // Autoplay Inputs
  hasAutoplay = signal<boolean>(true);
  autoplayTime = signal<number>(7000);
  autoplayResumeTime = signal<number>(15000);

  // Selected Inputs
  seleted = signal<number>(0);

  // Accessibility Inputs
  lang = signal<HeroCarouselLangs>('en');
  customAria = signal<HeroCarouselCustomAria | null>(null);

  // Needed functionalities


  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];

      //Style inputs
      if (!this.hasOverlay()) attrs.push(`[hasOverlay]="${this.hasOverlay()}"`);
      if (this.transitionTime() !== 800) attrs.push(`[transitionTime]="${this.transitionTime()}"`);
      if (this.arrowsPlacement() !== 'auto') attrs.push(`arrowsPlacement="${this.arrowsPlacement()}"`);
      if (this.hasCounter()) attrs.push(`[hasCounter]="${this.hasCounter()}"`);
      if (this.indicators() !== 'bars') attrs.push(`indicators="${this.indicators()}"`);

      // Autoplay inputs
      if (!this.hasAutoplay()) attrs.push(`[hasAutoplay]="${this.hasAutoplay()}"`);
      if (this.autoplayTime() !== 7000) attrs.push(`[autoplayTime]="${this.autoplayTime()}"`);
      if (this.autoplayResumeTime() !== 15000) attrs.push(`[autoplayResumeTime]="${this.autoplayResumeTime()}"`);

      // Accessibility inputs
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);


      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-hero-carousel [slides]=slidesObject() ${attrString ? ' \n' + attrString : ''}
        >
          // You can add custom content for each slide this way
          <ng-template [slideFor]="0">
            <button>
                Button in first slide
            </button>
          </ng-template>

          // Also, You can add custom content that remains visible across all slides
          <ng-template #outerContent>
            <button style="position: absolute; top: 1rem; right: 1.5rem;">
                X
            </button>
          </ng-template>

        </ng-hero-carousel>

      `);
    });

  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleHasOverlayInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasOverlay.set(selectElement.value === 'true' ? true : false);
  };

  handleTransitionTimeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.transitionTime.set(+selectElement.value);
  };

  handleArrowsPlacementInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.arrowsPlacement.set(selectElement.value as HeroCarouselArrowsPlacement);
  };

  handleHasCounterInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasCounter.set(selectElement.value === 'true' ? true : false);
  };

  handleIndicatorsInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.indicators.set(selectElement.value as HeroCarouselIndicators);
  };

  // AUTOPLAY INPUT OPTIONS

  handleHasAutoplayInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasAutoplay.set(selectElement.value === 'true' ? true : false);
  };

  handleAutoplayTimeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.autoplayTime.set(+selectElement.value);
  };

  handleAutoplayResumeTimeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.autoplayResumeTime.set(+selectElement.value);
  };

  // ACCESSIBILITY INPUT OPTIONS

  handleLangInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang.set(selectElement.value as HeroCarouselLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          hostAriaLabel: 'CUSTOM - Main carousel',
          autoplayPauseLabel: 'CUSTOM - Pause carousel autoplay',
          autoplayPlayLabel: 'CUSTOM - Resume carousel autoplay',
          prevBtnAriaLabel: 'CUSTOM - Go to previous slide',
          nextBtnAriaLabel: 'CUSTOM - Go to next slide',
          slidesRegionAriaLabel: 'CUSTOM - Wide carousel',
          slidesRegionRoleDescription: 'CUSTOM - Carousel',
          slideAriaLabel: (currentSlide: number, total: number) =>
              `CUSTOM -  Slide ${currentSlide} of ${total}`,
          slideRoleDescription: 'CUSTOM - slide',
        } as HeroCarouselCustomAria
      );
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Hero Carousel • UUX Angular',
      description: 'UUX Hero Carousel component playground',
      image: '/assets/thumbnails/hero-carousel_thumbnail_1200px.webp',
      url: '/components/hero-carousel/playground',
      type: 'website'
    });
  };
}
