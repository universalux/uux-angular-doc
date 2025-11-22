export const toggleKitDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-toggle-kit`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-toggle-kit@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-toggle-kit@v18-lts`,
  },
  importCode_1: {
    language: 'ts',
    code: `
      import { NgThemeToggle, ThemeToggleLangs, ThemeToggleCustomAria } from 'ng-toggle-kit';
      import { NgMenuToggle, MenuToggleLangs, MenuToggleCustomAria } from 'ng-toggle-kit';
    `,
  },
} as const;

export type ToggleKitDocCode = typeof toggleKitDocCode;
