export const heroCarouselDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-hero-carousel`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-hero-carousel@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-hero-carousel@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { NgHeroCarousel, HeroCarouselItem } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel],
        template: \`
          <ng-hero-carousel
            [slides]="items()"
          />
        \`
      })
      class App {
        items = signal<HeroCarouselItem[]>([
        {
          image_url: 'img1.jpg',
          title: 'First Slide',
          subtitle: '1st slide subtitle'
        },
        {
          image_url: 'img2.jpg',
          title: 'Second Slide',
          subtitle: '2nd slide subtitle'
        }
        ]);
      }`,
  },
  funcCode_1: {
    language: 'html',
    code: `
    import { HeroCarouselItem } from 'ng-hero-carousel';
    `
  },
  funcCode_2: {
    language: 'ts',
    code: `
    export interface HeroCarouselItem {
        image_url?: string;
        backgroundColor?: string;
        title?: string;
        subtitle?: string;
      };
    `
  },
  funcCode_3: {
    language: 'ts',
    code: `
    import { NgHeroCarousel, CarouselItem, SlideForDirective } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel, SlideForDirective],
        template: \`
          <ng-hero-carousel
            [slides]="items()"
          >
            <ng-template [slideFor]="0">
              <button>
                  Button in first slide
              </button>
            </ng-template>

          </ng-hero-carousel>
        \`
      })
      class App {
        items = signal<CarouselItem[]>([
          { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
          { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
        ]);
      }
    `
  },
  funcCode_4: {
    language: 'ts',
    code: `
    import { NgHeroCarousel, CarouselItem } from 'ng-hero-carousel';

        @Component({
          imports: [NgHeroCarousel],
          template: \`
            <ng-hero-carousel
              [slides]="items()"
            >
              <ng-template #outerContent>
                <button style="position: absolute; top: 1rem; right: 1.5rem;">
                    X
                </button>
              </ng-template>

            </ng-hero-carousel>
          \`
        })
        class App {
          items = signal<CarouselItem[]>([
          { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
          { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
          ]);

        }
    `
  },
  ioCode_1: {
    language: 'html',
    code: `
    <ng-hero-carousel
        [slides]="items()"

        [hasOverlay]="true"
        [transitionTime]="800"
        arrowsPlacement="auto"
        [hasCounter]="true"
        indicators="bars"

        [hasAutoplay]="true"
        [autoplayTime]="4000"
        [autoplayResumeTime]="15000"

        (selected)="selectedItem.set($event)"

        lang="en"
        accessibilityOptions="accOps()"
      >
    `
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-hero-carousel{
        --carousel-bg: red;
        --carousel-overlay-opacity: 0.8;
        --carousel-accent-color: red;
      }
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
    import { HeroCarouselLangs, HeroCarouselCustomAria } from 'ng-hero-carousel';
    `
  },
  accCode_2: {
    language: 'html',
    code: `
    <ng-hero-carousel lang="es" />
    `
  },
  accCode_3: {
    language: 'ts',
    code: `
    export interface HeroCarouselCustomAria {
        hostAriaLabel?: string;
        autoplayPauseLabel?: string;
        autoplayPlayLabel?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        slidesRegionAriaLabel?: string;
        slidesRegionRoleDescription?: string;
        slideAriaLabel?: (currentSlide: number, total: number) => string;
        slideRoleDescription?: string;
      };
    `
  },
  accCode_4: {
    language: 'ts',
    code: `
    import { NgHeroCarousel, HeroCarouselItem, HeroCarouselCustomAria } from 'ng-hero-carousel';

        @Component({
          imports: [NgHeroCarousel],
          template: \`
            <ng-hero-carousel
              [slides]="items()"
              [customAria]="accOpts()"
            />
          \`
        })
        class App {
          items = signal<HeroCarouselItem[]>([
          { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
          { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
          ]);

          accOpts = signal<HeroCarouselCustomAria>({
            hostAriaLabel: 'Main carousel CHANGED',
            autoplayPauseLabel: 'Pause carousel autoplay CHANGED',
            autoplayPlayLabel: 'Resume carousel autoplay CHANGED',
            prevBtnAriaLabel: 'Go to previous slide CHANGED',
            nextBtnAriaLabel: 'Go to next slide CHANGED',
            slidesRegionAriaLabel: 'Wide carousel CHANGED',
            slidesRegionRoleDescription: 'Carousel CHANGED',
            slideAriaLabel: (currentSlide: number, total: number) =>
                \`CHANGED - Slide ' + currentSlide + 'of ' + total \`
            slideRoleDescription: 'CHANGED - slide',
          });
        }
    `
  },
} as const;

export type HeroCarouselDocCode = typeof heroCarouselDocCode;
