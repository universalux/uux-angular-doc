export const buttonKitDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-button-kit`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-button-kit@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-button-kit@v18-lts`,
  },
  importCode_1: {
    language: 'ts',
    code: `
      import { NgLinkButton, NgSimpleButton } from 'ng-button-kit';
    `,
  },
} as const;

export type ButtonKitDocCode = typeof buttonKitDocCode;
