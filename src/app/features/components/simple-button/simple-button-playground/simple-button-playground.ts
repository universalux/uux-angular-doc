import { ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';
import { NgSimpleButton } from 'ng-simple-button'
import { PgInputSelector } from '../../shared/playground/pg-input-selector/pg-input-selector';
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { NgExpand } from 'ng-expand';

type simpleButtonType = 'solid' | 'minimal' | 'outline';
type simpleButtonHover = 'tone' | 'scale' | 'stroke' | 'shadow' | 'none';
type simpleButtonDirection = 'row' | 'column';

@Component({
  selector: 'app-simple-button-playground',
  imports: [NgSimpleButton, PgInputSelector, CodeBlock, PgShowCodeIcon, NgExpand],
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
  title = signal<string |null>(null);
  tabIndex = signal<number>(0);
  disabled = signal<boolean>(false);

  // Functionalities
  randomNumber = signal<number>(0);

  // Code to show properties
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
      // We only add inputs to code if they are diferent form default values
      if (this.type() !== 'solid') attrs.push(`type="${this.type()}"`);
      if (this.square()) attrs.push(`[square]="${this.square()}"`);
      if (this.hover() !== 'tone') attrs.push(`hover="${this.hover()}"`);
      if (this.direction() !== 'row') attrs.push(`direction="${this.direction()}"`);

      if (this.ariaLabel()) attrs.push(`ariaLabel="${this.ariaLabel()}"`);
      if (this.title()) attrs.push(`title="${this.title()}"`);
      if (this.disabled()) attrs.push(`[disabled]="${this.disabled()}"`);
      if (this.tabIndex() !== 0) attrs.push(`[tabIndex]="${this.tabIndex()}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-simple-button ${attrString ? ' \n' + attrString : ''}
        >
          Button Example
        </ng-simple-button>
      `);
    });
  }

  generateRandomNumber(){
    const number = Math.floor(Math.random() * 6) + 1;
    this.randomNumber.set(number);
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

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

  // ACCESSIBILITY INPUT OPTIONS

  handleDisabledInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.disabled.set(selectElement.value === 'true' ? true : false);
  }

  handleTabIndexInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tabIndex.set(Number(selectElement.value));
  }

  handleAriaLabelInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.ariaLabel.set(selectElement.value);
  }

  handleTitleInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.title.set(selectElement.value);
  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

}
