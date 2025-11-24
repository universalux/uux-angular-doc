import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { NgThemeToggle, ThemeToggleCustomAria, ThemeToggleLangs } from "ng-theme-toggle";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { NgExpand } from "ng-expand";
import { PgInputSelector } from "../../shared/playground/pg-input-selector/pg-input-selector";
import { PgShowCodeIcon } from "../../shared/playground/pg-show-code-icon/pg-show-code-icon";
import { NgSimpleButton } from "ng-simple-button";
import { ThemeService } from '@app/core/services/theme-service/theme-service';
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type ThemeToggleType = 'solid' | 'minimal' | 'outline';
type ThemeToggleHover = 'tone' | 'scale' | 'shadow' | 'none';
type ThemeToggleAnimation = 'rotateX' | 'rotateY' | 'soft';

@Component({
  selector: 'app-theme-toggle-playground',
  imports: [
    ...pgSharedImports,
    NgThemeToggle
  ],
  templateUrl: './theme-toggle-playground.html',
  styleUrl: './theme-toggle-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeTogglePlayground implements OnInit {
  // ----- Component inputs -----

  // Style & Behavior Inputs
  type = signal<ThemeToggleType>('minimal');
  hover = signal<ThemeToggleHover>('scale');
  animation = signal<ThemeToggleAnimation>('soft');
  faster = signal<boolean>(false);

  // Accessibility Inputs
  tabIndex = signal<number>(0);
  lang = signal<ThemeToggleLangs>('en');
  customAria = signal<ThemeToggleCustomAria | null>(null);

  // Needed functionalities
  themeService = inject(ThemeService);
  isDark = signal<boolean>(this.themeService.isDark());

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>(`
    <ng-theme-toggle />
  `)

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.type() !== 'minimal') attrs.push(`type="${this.type()}"`);
      if (this.hover() !== 'scale') attrs.push(`hover="${this.hover()}"`);
      if (this.animation() !== 'soft') attrs.push(`animation="${this.animation()}"`);
      if (this.faster()) attrs.push(`[faster]="${this.faster()}"`);

      if (this.tabIndex() !== 0) attrs.push(`[tabIndex]="${this.tabIndex()}"`);
      if (this.lang() !== 'en') attrs.push(`lang="${this.lang()}"`);
      if (this.customAria()) attrs.push(`[customAria]="${JSON.stringify(this.customAria())}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-theme-toggle
          isDarkSignal="yourIsDarkSignal" ${attrString ? ' \n' + attrString : ''}
        />

      `);
    });

    effect(() => {
      this.themeService.isDark();
      this.isDark.set(this.themeService.isDark());
    });
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.type.set(selectElement.value as ThemeToggleType);
  }

  handleHoverInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.hover.set(selectElement.value as ThemeToggleHover);
  }

  handleAnimationInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.animation.set(selectElement.value as ThemeToggleAnimation);
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
    this.lang.set(selectElement.value as ThemeToggleLangs);
  }

  handleCustomAriaInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    if(selectElement.value === 'null'){
      this.customAria.set(null);
    }else{
      this.customAria.set(
        {
          ariaLabelDark: 'Custom - set light mode',
          ariaLabelLight: 'Custom - set dark mode'
        } as ThemeToggleCustomAria
      );
    }

  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

    ngOnInit(): void {

      this.metaTagsService.setMetaTags({
        title: 'Theme Toggle • UUX Angular',
        description: 'UUX Theme Toggle component playground',
        image: '/assets/thumbnails/theme-toggle_thumbnail_1200px.webp',
        url: '/components/theme-toggle/playground',
        type: 'website'
      });

    }
}
