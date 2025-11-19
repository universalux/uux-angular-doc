import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { MenuToggleCustomAria, MenuToggleLangs, NgMenuToggle } from "ng-menu-toggle";
import { NgSimpleButton } from 'ng-simple-button';
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { NgExpand } from "ng-expand";
import { PgInputSelector } from "../../shared/playground/pg-input-selector/pg-input-selector";

type MenuToggleType = 'dots' | 'bars' | 'uneven';
type MenuToggleAnimation = 'rotateX' | 'rotateY' | 'soft';

@Component({
  selector: 'app-menu-toggle-playground',
  imports: [NgMenuToggle, NgSimpleButton, PgShowCodeIcon, CodeBlock, NgExpand, PgInputSelector],
  templateUrl: './menu-toggle-playground.html',
  styleUrl: './menu-toggle-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuTogglePlayground {

  // ----- Component inputs -----

  // Style & Behavior Inputs
  type = signal<MenuToggleType>('bars');
  invert = signal<boolean>(false);
  thin = signal<boolean>(false);
  rounded = signal<boolean>(false);
  animation = signal<MenuToggleAnimation>('soft');
  faster = signal<boolean>(false);

  // Accessibility Inputs
  tabIndex = signal<number>(0);
  lang = signal<MenuToggleLangs>('en');
  customAria = signal<MenuToggleCustomAria | null>(null);

  // Needed functionalities
  isOpen = signal<boolean>(false);

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>(`
    <ng-menu-toggle/>
  `)

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.type() !== 'bars') attrs.push(`type="${this.type()}"`);
      if (this.invert()) attrs.push(`[square]="${this.invert()}"`);
      if (this.thin()) attrs.push(`[thin]="${this.thin()}"`);
      if (this.rounded()) attrs.push(`[rounded]="${this.rounded()}"`);
      if (this.animation() !== 'soft') attrs.push(`animation="${this.animation()}"`);
      if (this.faster()) attrs.push(`[faster]="${this.faster()}"`);

      if (this.tabIndex() !== 0) attrs.push(`[tabIndex]="${this.tabIndex()}"`);
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-menu-toggle
          isOpenSignal="yourIsOpenSignal" ${attrString ? ' \n' + attrString : ''}
        />

      `);
    });
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.type.set(selectElement.value as MenuToggleType);
  }

  handleInvertInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.invert.set(selectElement.value === 'true' ? true : false);
  }

  handleThinInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.thin.set(selectElement.value === 'true' ? true : false);
  }

  handleRoundedInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.rounded.set(selectElement.value === 'true' ? true : false);
  }

  handleAnimationInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.animation.set(selectElement.value as MenuToggleAnimation);
  }

  handleFasterInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.faster.set(selectElement.value === 'true' ? true : false);
  }

  // ACCESSIBILITY INPUT OPTIONS

  handleTabIndexInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tabIndex.set(Number(selectElement.value));
  }

  handleLangInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang.set(selectElement.value as MenuToggleLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          ariaLabelOpened: 'Custom - Hide menu',
          ariaLabelClosed: 'Custom - Show menu'
        } as MenuToggleCustomAria
      );
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }
}
