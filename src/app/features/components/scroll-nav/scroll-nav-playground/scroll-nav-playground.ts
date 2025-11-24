import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { NgScrollNav, ScrollNavCustomAria, ScrollNavLangs } from "ng-scroll-nav";
import { NgLinkButton } from "ng-link-button";
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type ScrollNavScrollBehavior = 'smooth' |'auto';

@Component({
  selector: 'app-scroll-nav-playground',
  imports: [
    ...pgSharedImports,
    NgScrollNav, NgLinkButton
  ],
  templateUrl: './scroll-nav-playground.html',
  styleUrl: './scroll-nav-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollNavPlayground implements OnInit {
  // ----- Component inputs -----

  // Style & Behavior Inputs
  scrollStep = signal<number>(150);
  scrollBehavior = signal<ScrollNavScrollBehavior>('smooth');

  // Accessibility Inputs
  lang = signal<ScrollNavLangs>('en');
  customAria = signal<ScrollNavCustomAria | null>(null);

  // Needed functionalities
  reduceItems = signal<boolean>(false);
  reloadComponent = signal<boolean>(true);

  forceReload() {
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
      if (this.scrollStep() !== 150) attrs.push(`[scrollStep]="${this.scrollStep()}"`);
      if (this.scrollBehavior() !== 'smooth') attrs.push(`scrollBehavior="${this.scrollBehavior()}"`);

      // Accessibility inputs
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);

      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-scroll-nav ${attrString ? ' \n' + attrString : ''}
        >
          <ng-link-button>
            Link 1
          </ng-link-button>

          <ng-link-button>
            Link 2
          </ng-link-button>

          // More links...
        </ng-scroll-nav>
      `);
    });

  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleScrollStepInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.scrollStep.set(+selectElement.value);
  };

  handleScrollBehaviorInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.scrollBehavior.set(selectElement.value as ScrollNavScrollBehavior);
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
  };


  // ACCESSIBILITY INPUT OPTIONS

  handleLangInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.lang.set(selectElement.value as ScrollNavLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          navAriaLabel: 'CUSTOM - navAriaLabel',
          prevBtnAriaLabel: 'CUSTOM - prevBtnAriaLabel',
          nextBtnAriaLabel: 'CUSTOM - nextBtnAriaLabel',
          linksGroupAriaLabel: 'CUSTOM - linksGroupAriaLabel',
        } as ScrollNavCustomAria
      );
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Scroll Nav • UUX Angular',
      description: 'UUX Scroll Nav component playground',
      image: '/assets/images/thumbnails/scroll-nav_thumbnail_1200px.webp',
      url: '/components/scroll-nav/playground',
      type: 'website'
    });
  };
}
