import { ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';
import { NgSimpleButton } from 'ng-simple-button'
import { PgInputSelector } from '../../shared/playground/pg-input-selector/pg-input-selector';
import { CodeBlock } from "@app/shared/ui/code-block/code-block";

type simpleButtonType = 'solid' | 'minimal' | 'outline';
type simpleButtonHover = 'tone' | 'scale' | 'stroke' | 'shadow' | 'none';
type simpleButtonDirection = 'row' | 'column';

@Component({
  selector: 'app-simple-button-playground',
  imports: [NgSimpleButton, PgInputSelector, CodeBlock],
  templateUrl: './simple-button-playground.html',
  styleUrl: './simple-button-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonPlayground implements OnInit {

  // Component inputs
  type = signal<simpleButtonType>('solid');
  square = signal<boolean>(false);
  hover = signal<simpleButtonHover>('tone');
  direction = signal<simpleButtonDirection>('row');

  ariaLabel = signal<string | null>(null);
  disabled = signal<boolean>(false);

  randomNumber = signal<number>(0);
  showCode = signal<boolean>(false);

  currentCode = signal<string>(`
    <ng-simple-button>
        Button Example
      </ng-simple-button>
  `)

  ngOnInit(): void {
    this.generateRandomNumber();
  }

  constructor() {
    effect(() => {
      const attrs: string[] = [];

      // solo agregamos si son distintos del valor por defecto
      if (this.type() !== 'solid') attrs.push(`type="${this.type()}"`);
      if (this.square()) attrs.push(`[square]="${this.square()}"`);
      if (this.hover() !== 'tone') attrs.push(`hover="${this.hover()}"`);
      if (this.direction() !== 'row') attrs.push(`direction="${this.direction()}"`);
      if (this.disabled()) attrs.push(`[disabled]="${this.disabled()}"`);

      // unimos todos los atributos con un espacio, sin saltos de línea
      const attrString = attrs.join(' ');

      this.currentCode.set(`
        <ng-simple-button${attrString ? ' ' + attrString : ''}>
          Button Example
        </ng-simple-button>
      `);
    });
    // effect(() => {
    //   this.currentCode.set(`
    //       <ng-simple-button
    //         ${this.type() !== 'solid' ? `type="${this.type()}"` : ''}
    //         [square]="${this.square()}"
    //         hover="${this.hover()}"
    //         direction="${this.direction()}"
    //         [disabled]="${this.disabled()}"
    //       >
    //         Button Example
    //       </ng-simple-button>
    //   `)
    // })
  }

  updateCurrentCode(){
    this.currentCode.set(`
    <ng-simple-button
        type="${this.type()}"
      >
        Button Example
      </ng-simple-button>
  `)
  }

  generateRandomNumber(){
    const number = Math.floor(Math.random() * 6) + 1;
    this.randomNumber.set(number);
  }

  handleTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.type.set(selectElement.value as simpleButtonType);
  }

  handleSquareInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.square.set(selectElement.value === 'true' ? true : false);
  }

  handleHoverInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hover.set(selectElement.value as simpleButtonHover);
  }

  handleDirectionInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.direction.set(selectElement.value as simpleButtonDirection);
  }

  handleDisabledInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.disabled.set(selectElement.value === 'true' ? true : false);
  }

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }
}
