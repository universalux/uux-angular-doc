export const themeToggleDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-theme-toggle`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-theme-toggle@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-theme-toggle@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
    import { Component, signal } from '@angular/core';
      import { NgThemeToggle } from 'ng-theme-toggle';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgThemeToggle],
        template: \`
          <ng-theme-toggle
            [isDarkSignal]="isDark"
          />
        \`
      })
      export class App {
        isDark = signal<boolean>(false);
      }
    `,
  },
  stylingCode_1: {
    language: 'css',
    code: `
    ng-theme-toggle {
        --theme-toggle-bg: var(--global-color-from-theme);
        --theme-toggler-padding: 8px 16px;
      }
    `
  },
  accCode_1: {
    language: 'ts',
    code: `
    import { NgThemeButton, ThemeToggleLangs, ThemeToggleCustomAria } from 'ng-theme-toggle';
    `
  },
  accCode_2: {
    language: 'html',
    code: `
    <ng-theme-toggle lang="es" />
    `
  },
  accCode_3: {
    language: 'html',
    code: `
    <ng-theme-toggle
        [customAria]="{
          ariaLabelDark: 'Custom - set light mode',
          ariaLabelLight: 'Custom - set dark mode'
        }"
      />
    `
  }
} as const;

export type ThemeToggleDocCode = typeof themeToggleDocCode;
