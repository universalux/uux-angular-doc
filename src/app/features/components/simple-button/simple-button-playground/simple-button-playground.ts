import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type SimpleButtonType = 'solid' | 'minimal' | 'outline';
type SimpleButtonHover = 'tone' | 'scale' | 'stroke' | 'shadow' | 'none';
type SimpleButtonDirection = 'row' | 'column';

@Component({
  selector: 'app-simple-button-playground',
  imports: [...pgSharedImports],
  templateUrl: './simple-button-playground.html',
  styleUrl: './simple-button-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonPlayground implements OnInit {

  // Component inputs

  type = signal<SimpleButtonType>('solid');
  square = signal<boolean>(false);
  hover = signal<SimpleButtonHover>('tone');
  direction = signal<SimpleButtonDirection>('row');

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

  metaTagsService = inject(MetaTagsService);

  ngOnInit(): void {

    this.metaTagsService.setMetaTags({
      title: 'Simple Button • UUX Angular',
      description: 'UUX Simple Button component playground',
      image: '/assets/thumbnails/simple-button_thumbnail_1200px.webp',
      url: '/components/simple-button/playground',
      type: 'website'
    });

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
    this.type.set(selectElement.value as SimpleButtonType);
  }

  handleSquareInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.square.set(selectElement.value === 'true' ? true : false);
  }

  handleHoverInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hover.set(selectElement.value as SimpleButtonHover);
  }

  handleDirectionInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.direction.set(selectElement.value as SimpleButtonDirection);
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
