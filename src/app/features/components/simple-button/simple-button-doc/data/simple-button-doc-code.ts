export const simpleButtonDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-simple-button`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-simple-button@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-simple-button@v18-lts`,
  },
  overviewCode_1: {
    language: 'ts',
    code: `
      import { Component, signal } from '@angular/core';
      import { NgSimpleButton } from 'ng-simple-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [NgSimpleButton],
        template: \`
          <ng-simple-button
            (onClick)="clickFunction()"
            type="solid"
            [square]="true"
            hover="shadow"
            ariaLabel="Custom aria label"
          >
            Simple button inner content
          </ng-simple-button>

          <p>Clicked {{ count() }} times</p>
        \`,
      })
      export class App {
        count = signal<number>(1);

        clickFunction() {
          const current = this.count();
          this.count.set(current + 1);
        }
      };`,
  },
  functionalityCode_1: {
    language: 'html',
    code: `
      <ng-simple-button (onClick)="handleClick($event)">
        Click me
      </ng-simple-button>
    `
  },
  functionalityCode_2: {
    language: 'ts',
    code: `
      handleClick(event: MouseEvent) {
        console.log(event.clientX, event.clientY);
      }
    `
  },
  stylingCode_1: {
    language: 'css',
    code: `
      ng-simple-button {
        --simple-button-bg: orange;
        --simple-button-hover-bg: red;
      }
    `
  },
  stylingCode_2: {
    language: 'css',
    code: `
      ng-simple-button[type="solid"] {
        --simple-button-bg: orange;
      }
    `
  },
  stylingCode_3: {
    language: 'css',
    code: `
      ng-simple-button.myClass {
        --simple-button-outline: 2px solid orange;
      }
    `
  }
} as const;

export type SimpleButtonDocCode = typeof simpleButtonDocCode;
