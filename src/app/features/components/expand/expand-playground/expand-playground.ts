import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { NgExpand } from "ng-expand";
import { NgSimpleButton } from "ng-simple-button";
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { PgInputSelector } from "../../shared/playground/pg-input-selector/pg-input-selector";

type ExpandIconType = 'arrow' | 'plus';

@Component({
  selector: 'app-expand-playground',
  imports: [NgExpand, NgSimpleButton, PgShowCodeIcon, CodeBlock, PgInputSelector],
  templateUrl: './expand-playground.html',
  styleUrl: './expand-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandPlayground {
  // Component inputs

  label = signal<string>('Expand button label example');
  startExpanded = signal<boolean>(false);
  iconType = signal<ExpandIconType>('arrow');

  tabIndex = signal<number>(0);

  // Functionalities
  randomNumber = signal<number>(0);

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.label()) attrs.push(`label="${this.label()}"`);
      if (this.startExpanded()) attrs.push(`[startExpanded]="${this.startExpanded()}"`);
      if (this.iconType() !== 'arrow') attrs.push(`iconType="${this.iconType()}"`);

      if (this.tabIndex() !== 0) attrs.push(`[tabIndex]="${this.tabIndex()}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-expand ${attrString ? ' \n' + attrString : ''}
        >
          <p>Expandable content example</p>
        </ng-expand>
      `);
    });
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleLabelInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.label.set(selectElement.value);
  }

  handleStartExpandedInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.startExpanded.set(selectElement.value === 'true' ? true : false);
  }

  handleIconTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.iconType.set(selectElement.value as ExpandIconType);
  }


  // ACCESSIBILITY INPUT OPTIONS

  handleTabIndexInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tabIndex.set(Number(selectElement.value));
  }


  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }
}
