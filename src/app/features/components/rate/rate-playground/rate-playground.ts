import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { NgRate, RateCustomAria, RateLangs} from 'ng-rate';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type ItemsValues = 3 | 4 | 5 | 7 | 10;
type IconValues = 'star' | 'heart';
type HoverValues = Array<'scale' | 'rotateX' | 'translateY'> |'none';

@Component({
  selector: 'app-rate-playground',
  imports: [...pgSharedImports, NgRate],
  templateUrl: './rate-playground.html',
  styleUrl: './rate-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatePlayground {

  // ----- Component inputs -----

  // Functionality inputs / outputs
  items = signal<ItemsValues>(5);
  readOnly = signal<boolean>(false);
  average = signal(2.5);

  // Style and behavior inputs
  icon = signal<IconValues>('star');
  hover = signal<HoverValues>(['scale']);

  // Accessibility Inputs
  lang = signal<RateLangs>('en');
  customAria = signal<RateCustomAria | null>(null);

  // Needed functionalities

  voteOutput = signal<boolean>(true);
  currentVote = signal<number |null>(null);

  handleReset(){
    this.currentVote.set(null);
  }

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];

      // Functionality inputs / outputs
      if (this.items() !== 5) attrs.push(`[items]="${this.items()}"`);
      if (this.average()) attrs.push(`[average]="${this.average()}"`);
      if (!this.readOnly()) attrs.push(`[readOnly]="${this.readOnly()}"`);
      if (this.voteOutput()) attrs.push(`(vote)="yourHandleVoteSignal.set($event)"`);

      // Style and behavior inputs
      if (this.icon() !== 'star') attrs.push(`icon="${this.icon()}"`);
      if (this.hover()[0] !== 'scale' && this.hover().length === 1) attrs.push(`[hover]="${this.hover()}"`);

      // Accessibility inputs
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);


      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-rate ${attrString ? ' \n' + attrString : ''}
        />
      `);
    });

  }

  // Functionality input / output option handlers

  handleItemsInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.items.set(+selectElement.value as ItemsValues);
  };

  handleAverageInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.average.set(+selectElement.value);
  };

  handleReadOnlyInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.readOnly.set(selectElement.value === 'true' ? true : false);
  };

  handleVoteOuputInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.voteOutput.set(selectElement.value === 'true' ? true : false);
  };

  // Style and behavior input option handlers

  handleIconInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.icon.set(selectElement.value as IconValues);
  };

  get hoverArray(): Array<'scale' | 'rotateX' | 'translateY'> {
    const value = this.hover();
    return value === 'none' ? [] : value;
  }

  handleHoverInput(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value as 'scale' | 'rotateX' | 'translateY';

    // si hover es 'none', empezamos desde array vacío
    const current = this.hover() === 'none'
      ? []
      : this.hoverArray;

    let next: Array<'scale' | 'rotateX' | 'translateY'>;

    if (target.checked) {
      next = [...current, value];
    } else {
      next = current.filter(item => item !== value);
    }

    // actualizamos el input con set() porque es Signal Input
    this.hover.set(next);
  };

  // Accessibility input option handlers


  handleLangInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang.set(selectElement.value as RateLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          containerReadOnlyAriaLabel: 'CUSTOM - Average rating',
          containerInteractiveAriaLabel: 'CUSTOM - Rating selector',
          buttonInteractiveAriaLabel: (value: number, total: number) =>
            `CUSTOM - Select ${value} of ${total}`,
        } as RateCustomAria);
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Rate • UUX Angular',
      description: 'UUX Rating component playground',
      image: '/assets/images/thumbnails/hero-carousel_thumbnail_1200px.webp',
      url: '/components/rate/playground',
      type: 'website'
    });
  };
}
