export const linkButtonDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-link-button`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-link-button@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-link-button@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { Component, signal } from '@angular/core';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [ NgLinkButton ],
        template: \`
          <ng-link-button
            routerLink="home"
            type="solid"
            [square]="true"
            hover="shadow"
            ariaLabel="Custom aria label"
          >
            Link button inner content
          </ng-link-button>
        \`,
      })
      export class App {

      }
    `,
  },
  functionalityCode_1: {
    language: 'ts',
    code: `
    import { Component, inject } from '@angular/core';
      import { ActivatedRoute } from '@angular/router';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [NgLinkButton],
        template: \`
          <ng-link-button
            routerLink="home"
            [activatedRoute]="false"
            [queryParams]="{ category: 'books', sort: 'price' }"
            fragment="fragmentExample"
            [relativeTo]="activatedRoute"
            queryParamsHandling="merge"
            [state]="{ state: 'state example' }"
          >
            Link button inner content
          </ng-link-button>
        \`,
      })
      export class App {
        activatedRoute = inject(ActivatedRoute);
      }
    `
  },
  functionalityCode_2: {
    language: 'html',
    code: `
    <ng-link-button
        href="https://universalux.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        Link button inner content
      </ng-link-button>
    `
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-link-button {
        --link-button-bg: orange;
        --link-button-hover-bg: red;
      }
    `
  },
  stylingCode_2: {
    language: 'css',
    code: `
    ng-link-button[type="solid"] {
        --link-button-bg: orange;
      }
    `
  },
  stylingCode_3: {
    language: 'css',
    code: `
    ng-link-button.myClass {
        --link-button-outline: 2px solid orange;
      }
    `
  }
} as const;

export type LinkButtonDocCode = typeof linkButtonDocCode;
