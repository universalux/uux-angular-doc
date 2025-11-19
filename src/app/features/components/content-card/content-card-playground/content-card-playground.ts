import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { NgContentCard } from "ng-content-card";
import { NgSimpleButton } from "ng-simple-button";
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { NgExpand } from "ng-expand";
import { PgInputSelector } from "../../shared/playground/pg-input-selector/pg-input-selector";

type ContentCardAnimation = 'translateY' | 'fadeIn';
type ContentCardHover = 'scale'| 'tone'| 'both'| 'none';

@Component({
  selector: 'app-content-card-playground',
  imports: [NgContentCard, NgSimpleButton, PgShowCodeIcon, CodeBlock, NgExpand, PgInputSelector],
  templateUrl: './content-card-playground.html',
  styleUrl: './content-card-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardPlayground {

  //Component slots
  hasHeader = signal<boolean>(true);
  hasImage = signal<boolean>(true);
  hasImageHoverClass = signal<boolean>(true);
  hasBody = signal<boolean>(true);
  hasFooter = signal<boolean>(true);
  hasAbsolute = signal<boolean>(true);

   // Component inputs
  animation = signal<ContentCardAnimation>('translateY');
  hover = signal<ContentCardHover>('scale');
  shadow = signal<boolean>(true);

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.animation() !== 'translateY') attrs.push(`animation="${this.animation()}"`);
      if (this.hover() !== 'scale') attrs.push(`hover="${this.hover()}"`);
      if (!this.shadow()) attrs.push(`shadow="${this.shadow()}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' ');

      const content : string[] = [];

      if (this.hasHeader()) content.push(`
        <header card-header>
          Header Content
        </header>
      `);

      if (this.hasImage()) content.push(`
        <section card-image>
          <img ${this.hasImageHoverClass() ? 'class="scaleHover"' : ''}
            src="images/examples/ng-content-card_example-img.png"
            alt="NgContentCard Example image"
          >
        </section>
      `);

      if (this.hasBody()) content.push(`
        <section card-body>
          Body content
        </section>
      `);

      if (this.hasFooter()) content.push(`
        <footer card-footer>
          Footer content
        </footer>
      `);

      if (this.hasFooter()) content.push(`
        <div absolute-content
          style="top: .5rem; right: 1rem; padding: .5rem; background: red;"
        >
          Extra content
        </div>
      `);

      const contentString = content.join(' \n');

      this.currentCode.set(`
      <ng-content-card ${attrString ? attrString : ''}>
            ${contentString ? ' \t' + contentString : ''}
      </ng-content-card>
      `);
    });
  }

  // CONTENT OPTIONS

  handleHasHeaderInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasHeader.set(selectElement.value === 'true' ? true : false);
  }

  handleHasImageInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasImage.set(selectElement.value === 'true' ? true : false);
  }

  handleHasImageHoverClassInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasImageHoverClass.set(selectElement.value === 'true' ? true : false);
  }

  handleHasBodyInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasBody.set(selectElement.value === 'true' ? true : false);
  }

  handleHasFooterInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasFooter.set(selectElement.value === 'true' ? true : false);
  }
  handleHasAbsoluteInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hasAbsolute.set(selectElement.value === 'true' ? true : false);
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleAnimationInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.animation.set(selectElement.value as ContentCardAnimation);
  }

  handleHoverInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hover.set(selectElement.value as ContentCardHover);
  }

  handleShadowInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.shadow.set(selectElement.value === 'true' ? true : false);
  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

}
