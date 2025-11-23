export const expandDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-expand`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-expand@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-expand@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
      import { Component, signal } from '@angular/core';
      import { NgExpand } from 'ng-expand';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [ NgExpand ],
        template: \`
          <ng-expand
            label="Expand button label"
            [startExpanded]="false"
            iconType="plus"
          >
            <p>This is the content</p>
          </ng-expand>
        \`,
      })
      export class App {}`,
  },
  stylingCode_1: {
    language: 'css',
    code: `
      ng-expand {
        --expand-bg: orange;
        --expand-icon-size: 1.1rem;
      }
    `
  },
  stylingCode_2: {
    language: 'css',
    code: `
      ng-expand.myClass {
        --expand-bg: blue;
      }
    `
  }
} as const;

export type ExpandDocCode = typeof expandDocCode;
