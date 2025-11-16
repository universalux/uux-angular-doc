import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-pg-show-code-icon',
  imports: [],
  template: `
    @if (showCode()) {
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z"/></svg>
    }@else {
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
    }`,
  styles: `
  :host{
    display: flex;
    align-items: center;
  }
  svg{
    transition: fill .3s ease-in-out;
    fill: var(--color-fg);
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PgShowCodeIcon {
  showCode = input<boolean>();
}
