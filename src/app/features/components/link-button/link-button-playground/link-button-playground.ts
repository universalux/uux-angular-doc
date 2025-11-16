import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgLinkButton } from 'ng-link-button';
import { PgInputSelector } from '../../shared/playground/pg-input-selector/pg-input-selector';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { PgShowCodeIcon } from '../../shared/playground/pg-show-code-icon/pg-show-code-icon';
import { NgSimpleButton } from 'ng-simple-button';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
import { ExpandableOptions } from "../../shared/playground/expandable-options/expandable-options";

type LinkButtonRouterLink = string | any[] | undefined;
type LinkButtonQueryParams = Record<string, any> | null;
type LinkButtonRelativeTo = ActivatedRoute | null;
type LinkButtonQueryParamsHandling = 'merge' | 'preserve' | null;
type LinkButtonState = { [k: string]: any; } | undefined;

type LinkButtonType = 'solid' | 'minimal' | 'outline';
type LinkButtonHover = 'tone' | 'scale' | 'stroke' | 'shadow' | 'none';
type LinkButtonDirection = 'row' | 'column';


@Component({
  selector: 'app-link-button-playground',
  imports: [NgSimpleButton, NgLinkButton, PgInputSelector, CodeBlock, PgShowCodeIcon, ExpandableOptions],
  templateUrl: './link-button-playground.html',
  styleUrl: './link-button-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonPlayground implements OnInit{

  private router = inject(Router);
  ar = inject(ActivatedRoute);
  linkClicked = signal<boolean>(false);
  currentUrl = signal<string | null>(null);
  currentState = signal<string |null>(null);
  private location = inject(Location);

  // ----- Component inputs
  // ROUTERLINK INPUTS
  routerLink = signal<LinkButtonRouterLink>(undefined);
  activatedRoute = signal<boolean>(true);
  queryParams = signal<LinkButtonQueryParams>(null);
  fragment = signal<string | undefined>(undefined);
  relativeTo = signal<LinkButtonRelativeTo>(null);
  queryParamsHandling = signal<LinkButtonQueryParamsHandling>(null);
  state = signal<LinkButtonState>(undefined);

  // HREF INPUTS
  href = signal<string | null>(null);
  target = signal<'_self' | '_blank' | '_parent' | '_top' | string>('_blank');
  rel = signal<string>('noreferrer noopener');

  // STYLE INPUTS
  type = signal<LinkButtonType>('solid');
  square = signal<boolean>(false);
  hover = signal<LinkButtonHover>('tone');
  direction = signal<LinkButtonDirection>('row');

  // ----- ACCESSIBILITY INPUTS
  ariaLabel = signal<string | null>(null);
  title = signal<string | null>(null);
  tabIndex = signal<number | null>(0);
  ariaCurrent = signal<'page' | 'step' | 'true' | null>(null);
  download = signal<string | boolean | null>(null);
  role = signal<'link' | 'button' | null>(null);
  disabled = signal<boolean>(false);


  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>(`
    <ng-link-button>
        Button Example
      </ng-link-button>
  `)

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl.set(event.url);

        const state = this.location.getState();
        console.log('STATE recibed:', state);

        this.linkClicked.set(true);
      });
  }

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if(this.routerLink()) attrs.push(`routerLink="${this.routerLink()}"`);
      if(!this.activatedRoute()) attrs.push(`[routerLink]="${this.activatedRoute()}"`);
      if(this.queryParams()) attrs.push(`[queryParams]='${JSON.stringify(this.queryParams())}'`);
      if(this.fragment()) attrs.push(`fragment="${this.fragment()}"`);
      if(this.relativeTo()) attrs.push(`relativeTo="activatedRoute"`);
      if(this.queryParamsHandling()) attrs.push(`queryParamsHandling="${this.queryParamsHandling()}"`);
      if(this.state()) attrs.push(`[state]='${JSON.stringify(this.state())}'`);

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
        <ng-link-button ${attrString ? ' \n' + attrString : ''}
        >
          Button Example
        </ng-link-button>
      `);
    });
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

  // ROUTERLINK INPUT OPTIONS

  handleRouterLinkInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'Test Link'){
      this.routerLink.set("playground-test-link" as LinkButtonRouterLink);
    } else if (selectElement.value === 'undefined'){
      this.routerLink.set(undefined as LinkButtonRouterLink);
    }
  }

  handleActivatedRouteInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.activatedRoute.set(selectElement.value === 'true' ? true : false);
  }

  handleQueryParamsInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.queryParams.set(null);
    }else if(selectElement.value === 'Query Example'){
      this.queryParams.set({exampleKey : 'exampleValue'});
    }
  }

  handleFragmentInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.fragment.set(selectElement.value);
  }

  handleRelativeToInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.relativeTo.set(null);
    }else if(selectElement.value === 'ActivatedRoute'){
      this.relativeTo.set(this.ar as LinkButtonRelativeTo);
    }
  }

  handleQueryParamsHandlingInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.queryParamsHandling.set(null);
    }else{
      this.queryParamsHandling.set(selectElement.value as LinkButtonQueryParamsHandling);
    }
  }

  handleStateInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'undefined'){
      this.state.set(undefined);
    }else if(selectElement.value === 'State Example'){
      this.state.set({exampleStateKey : 'exampleStateValue'});
      this.currentState.set(JSON.stringify({exampleStateKey : 'exampleStateValue'}));
    }
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.type.set(selectElement.value as LinkButtonType);
  }

  handleSquareInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.square.set(selectElement.value === 'true' ? true : false);
  }

  handleHoverInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hover.set(selectElement.value as LinkButtonHover);
  }

  handleDirectionInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.direction.set(selectElement.value as LinkButtonDirection);
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

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }


}
