import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { NgContentCarousel, ContentCarouselItemDirective, ContentCarouselLangs, ContentCarouselCustomAria } from "ng-content-carousel";
import { NgSimpleButton } from "ng-simple-button";
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { NgExpand } from "ng-expand";
import { PgInputSelector } from "../../shared/playground/pg-input-selector/pg-input-selector";

type ContentCarouselAdvanceMode = 'single' |'page';
type ContentCarouselArrowStyle = 'minimal' |'solid';



@Component({
  selector: 'app-content-carousel-playground',
  imports: [NgContentCarousel, ContentCarouselItemDirective, NgSimpleButton, PgShowCodeIcon, CodeBlock, NgExpand, PgInputSelector],
  templateUrl: './content-carousel-playground.html',
  styleUrl: './content-carousel-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCarouselPlayground {
  // ----- Component inputs -----

  // Style & Behavior Inputs
  transition = signal<boolean>(true);
  advanceMode = signal<ContentCarouselAdvanceMode>('page');
  arrowStyle = signal<ContentCarouselArrowStyle>('minimal');
  hideArrowsOnEdges = signal<boolean>(true);
  hideArrowsWhenNoOverflow = signal<boolean>(true);

  // Accessibility Inputs
  lang = signal<ContentCarouselLangs>('en');
  customAria = signal<ContentCarouselCustomAria | null>(null);

  // Needed functionalities
  reduceItems = signal<boolean>(false);
  reloadComponent = signal<boolean>(true);

  forceReload() {
    console.log("Forcing");
    this.reloadComponent.set(false);
    setTimeout(() => {
      this.reloadComponent.set(true)
    })
  }

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];

      //Style inputs
      if (!this.transition()) attrs.push(`[transition]="${this.transition()}"`);
      if (this.advanceMode() !== 'page') attrs.push(`advanceMode="${this.advanceMode()}"`);
      if (this.arrowStyle() !== 'minimal') attrs.push(`arrowStyle="${this.arrowStyle()}"`);
      if (!this.hideArrowsOnEdges()) attrs.push(`[hideArrowsOnEdges]="${this.hideArrowsOnEdges()}"`);
      if (!this.hideArrowsWhenNoOverflow()) attrs.push(`[hideArrowsWhenNoOverflow]="${this.hideArrowsWhenNoOverflow()}"`);

      // Accessibility inputs
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);

      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-content-carousel ${attrString ? ' \n' + attrString : ''}
        >
        </ng-content-carousel>

      `);
    });

  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleTransitionInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.transition.set(selectElement.value === 'true' ? true : false);
  };

  handleAdvanceModeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.advanceMode.set(selectElement.value as ContentCarouselAdvanceMode);
  };

  handleArrowStyleInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.arrowStyle.set(selectElement.value as ContentCarouselArrowStyle);
  };

  handleHideArrowsOnEdgesInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hideArrowsOnEdges.set(selectElement.value === 'true' ? true : false);
  };

  handleHideArrowsWhenNoOverflowInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hideArrowsWhenNoOverflow.set(selectElement.value === 'true' ? true : false);
  };

  handleForceNoOverflow(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'true'){
      this.reduceItems.set(true);
      this.forceReload();
    }else{
      this.reduceItems.set(false);
      this.forceReload();
    }
  }


  // ACCESSIBILITY INPUT OPTIONS

  handleLangInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang.set(selectElement.value as ContentCarouselLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          globalAriaLabel: 'CUSTOM - Content carousel',
          globalRoleDescription: 'CUSTOM - Carousel of content',
          prevBtnAriaLabel: 'CUSTOM - Go to previous item',
          nextBtnAriaLabel: 'CUSTOM - Go to next item',
          trackRoleDescription: 'CUSTOM - Carousel track',
          trackAriaLabel: 'CUSTOM - Carousel items',
          rangeMessage: (first, last, total) => `CUSTOM - Showing items ${first} to ${last} of ${total}`,
        } as ContentCarouselCustomAria
      );
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }
}
