export const scrollNavDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-scroll-nav`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-scroll-nav@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-scroll-nav@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { NgScrollNav } from 'ng-scroll-nav';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgScrollNav, NgLinkButton],
        template: \`
          <ng-scroll-nav>
            <ng-link-button [square]="true">
              Link 1
            </ng-link-button>
            <ng-link-button [square]="true">
              This is Link 2
            </ng-link-button>
            <ng-link-button [square]="true">
              Another Link 3
            </ng-link-button>
            <ng-link-button [square]="true">
              Link 4
            </ng-link-button>
          </ng-scroll-nav>
        \`,
      })`,
  },
  funcCode_1: {
    language: 'html',
    code: `
    <ng-scroll-nav [scrollStep]="200" scrollBehavior="auto">
        <ng-link-button>
          Link 1
        </ng-link-button>
        <ng-link-button>
          This is Link 2
        </ng-link-button>
      </ng-scroll-nav>
      `,
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-scroll-nav{
        --scroll-nav-justify-content: center;
        --scroll-nav-arrow-size: 1rem;
      }
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
    import { ScrollNavLangs, ScrollNavCustomAria } from 'ng-scoll-nav';
    `
  },
  accCode_2: {
    language: 'html',
    code: `
    <ng-scroll-nav lang="es" />
    `
  },
  accCode_3: {
    language: 'ts',
    code: `
    export interface ScrollNavCustomAria {
        navAriaLabel?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        linksGroupAriaLabel?: string;
      };
    `
  },
  accCode_4: {
    language: 'ts',
    code: `
    import { NgScrollNav, ScrollNavCustomAria } from 'ng-scroll-nav';

        @Component({
          imports: [NgScrollNav],
          template: \`
            <ng-scroll-nav lang="en" [customAria]="accOpts()">
              <ng-link-button [square]="true">
                Link 1
              </ng-link-button>
              <ng-link-button [square]="true">
                This is Link 2
              </ng-link-button>
            </ng-scroll-nav>
          \`
        })
        class App {
          accOpts = signal<ScrollNavCustomAria>({
            navAriaLabel: 'EDITED navAriaLabel',
            prevBtnAriaLabel: 'EDITED prevBtnAriaLabel',
            nextBtnAriaLabel: 'EDITED nextBtnAriaLabel',
            linksGroupAriaLabel: 'EDITED linksGroupAriaLabel',
          });
        }
    `
  },
} as const;

export type ScrollNavDocCode = typeof scrollNavDocCode;
