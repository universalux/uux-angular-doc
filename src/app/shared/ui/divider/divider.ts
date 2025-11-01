import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [],
  template: `<div></div>`,
  styles: `
    :host{
      display: block;
      width: 100%;
    }
    div{
      background-color: var(--color-fg-trans);
      width: 100%;
      height: 1px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Divider {}
