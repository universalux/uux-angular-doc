export const singleButtonDocCode = {
  overviewCode: `
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
};
  `
} as const;

export type SingleButtonDocCode = typeof singleButtonDocCode;


