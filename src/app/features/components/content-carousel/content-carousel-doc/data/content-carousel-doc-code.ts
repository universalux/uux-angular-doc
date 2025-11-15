export const contentCarouselDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-content-carousel`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-content-carousel@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-content-carousel@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';

        @Component({
          selector: 'app-root',
          standalone: true,
          imports: [NgContentCarousel, ContentCarouselItemDirective],
          template: \`
            <ng-content-carousel>
              <div contentCarouselItem >
                Here goes the item content you want
              </div>
              <div contentCarouselItem >
                Here goes the item content you want
              </div>
            </ng-content-carousel>
          \`,
        })`,
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-content-carousel{
        margin: 1rem; //Example of property you can change directly for the whole component
        --carousel-accent-color: green;
        --carousel-arrows-solid-bg: red;
        --carousel-arrows-hover-bg: #a538a5;
        --carousel-arrows-hover-color: #ffffff;
        --carousel-transition-time: 1s;
      }
    `
  },
  stylingCode_2: {
    language: 'css',
    code: `
    :host ::ng-deep .carousel-item:focus-visible{
        outline: 2px solid var(--carousel-accent-color);
        outline-offset: -2px;
        border-radius: 4px;
      }

      :host ::ng-deep .carousel-item{
        padding: 1rem;
      }
    `
  },
  stylingCode_3: {
    language: 'css',
    code: `
    ng-content-carousel .carousel-item{
        background-color: blue;
      }
    `
  },
  stylingCode_4: {
    language: 'html',
    code: `
    <ng-content-carousel [accessibilityOptions]="accOpts()">
        <div carouselItem> // Use this as a item container => predefine position, padding...
          <div class=""> // Use another container for the content itself
            <span>Top content</span>
            <span>Middle content</span>
            <span>Bottom content</span>
          </div>
        </div>
      </ng-content-carousel>
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
    import { ContentCarouselLangs, ContentCarouselCustomAria } from 'ng-content-carousel';
    `
  },
  accCode_2: {
    language: 'html',
    code: `
    <ng-content-carousel lang="es" />
    `
  },
  accCode_3: {
    language: 'ts',
    code: `
    export interface ContentCarouselCustomAria {
        globalAriaLabel?: string;
        globalRoleDescription?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        trackRoleDescription?: string;
        trackAriaLabel?: string;
        rangeMessage?: (first: number, last: number, total: number) => string;
      };
    `
  },
  accCode_4: {
    language: 'ts',
    code: `
    import { NgContentCarousel, ContentCarouselItemDirective, ContentCarouselCustomAria } from 'ng-content-carousel';

        @Component({
          imports: [NgContentCarousel, ContentCarouselItemDirective],
          template: \`
            <ng-content-carousel [customAria]="accOpts()">
              <div contentCarouselItem>
                Here goes the item content you want
              </div>
              <div contentCarouselItem>
                Here goes the item content you want
              </div>
            </ng-content-carousel>
          \`
        })
        class App {

          accOpts : ContentCarouselCustomAria = {
            globalAriaLabel: 'EDIT Content carousel',
            globalRoleDescription: 'EDIT Carousel of content',
            prevBtnAriaLabel: 'EDIT Go to previous item',
            nextBtnAriaLabel: 'EDIT Go to next item',
            trackRoleDescription: 'EDIT Carousel track',
            trackAriaLabel: 'EDIT Carousel items',
            rangeMessage: (first, last, total) =>
              'EDIT Showing items ' + first + ' to ' + last + ' of ' + total,
          }
        }
    `
  },
} as const;

export type ContentCarouselDocCode = typeof contentCarouselDocCode;
