export const menuToggleDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-menu-toggle`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-menu-toggle@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-menu-toggle@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { Component, signal } from '@angular/core';
      import { NgMenuToggle } from 'ng-menu-toggle';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgMenuToggle],
        template: \`
          <ng-menu-toggle
            [isOpenSignal]="menuOpen"
          />
        \`
      })
      export class App {
        menuOpen = signal<boolean>(false);
      }
    `,
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-menu-toggle{
        --menu-toggle-size: 50px;
        --menu-toggle-color: red;
      }
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
    import { NgMenuToggle, MenuToggleLangs, MenuToggleCustomAria } from 'ng-menu-toggle';
    `
  },
  accCode_2: {
    language: 'html',
    code: `
    <ng-menu-toggle lang="es" />
    `
  },
  accCode_3: {
    language: 'html',
    code: `
    <ng-menu-toggle
        [customAria]="{
          ariaLabelOpened: 'Custom - Hide navigation',
          ariaLabelClosed: 'Custom - Show navigation'
        }"
      />
    `
  }
} as const;

export type MenuToggleDocCode = typeof menuToggleDocCode;
