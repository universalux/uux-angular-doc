export const ratingsDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-ratings`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-ratings@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-ratings@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
      import { Component, signal } from '@angular/core';
      import { NgRatings } from 'ng-ratings';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgRatings],
        template: \`
          <ng-ratings
            [average]="3.4"
            [items]="7"
            icon="heart"
            [readOnly]="false"
            [hover]="['translateY', 'scale']"
          />
        \`
      })
      export class App {}
    `,
  },
  stylingCode_1: {
    language: 'css',
    code: `
      ng-ratings{
        max-height: 35px;
        --rating-filled-color: blue;
        --rating-stroke-width: .4;
        --rating-empty-color: white;
      }
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
      import { RatingCustomAria } from 'ng-ratings';
    `
  },
  accCode_2: {
    language: 'ts',
    code: `
      export interface RatingCustomAria {
        containerReadOnlyAriaLabel?: string;
        containerInteractiveAriaLabel?: string;
        buttonInteractiveAriaLabel?: (value: number, total: number) => string;
      };
    `
  },
  accCode_3: {
    language: 'ts',
    code: `
      import { NgRatings, RatingCustomAria } from 'ng-ratings';

      @Component({
        imports: [NgRatings],
        template: \`
          <ng-ratings
            [items]="4"
            [average]="2.5"
            [customAria]="accOpts()"
          />
        \`
      })
      class App {
        accOpts = signal<RatingCustomAria>({
          containerInteractiveAriaLabel: 'CUSTOM - Average rating',
          buttonInteractiveAriaLabel: (value, total) =>
              'CHANGED - Select ' + value + 'of ' + total
        });
      }
    `
  }
} as const;

export type RatingsDocCode = typeof ratingsDocCode;
