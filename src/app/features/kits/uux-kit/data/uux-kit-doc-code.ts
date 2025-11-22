export const uuxKitDocCode = {
  installationCode_1: {
    language: 'bash',
    code: `npm install ng-uux`,
  },
  installationCode_2: {
    language: 'bash',
    code: `npm install ng-uux@v19-lts`,
  },
  installationCode_3: {
    language: 'bash',
    code: `npm install ng-uux@v18-lts`,
  },
  importCode_1: {
    language: 'ts',
    code: `
      import { NgThemeToggle, ThemeToggleLangs, ThemeToggleCustomAria } from 'ng-uux';
      import { NgMenuToggle, MenuToggleLangs, MenuToggleCustomAria } from 'ng-uux';
      import { NgLinkButton } from 'ng-uux';
      import { NgSimpleButton } from 'ng-uux';
      import { NgContentCard } from 'ng-uux';
      import { NgContentCarousel, ContentCarouselLangs, ContentCarouselCustomAria, ContentCarouselItemDirective } from 'ng-uux';
      import { NgHeroCarousel, HeroCarouselLangs, HeroCarouselCustomAria, SlideForDirective } from 'ng-uux';
      import { NgScrollNav, ScrollNavLangs, ScrollNavCustomAria } from 'ng-uux';
      import { NgExpand } from 'ng-uux';
    `,
  },
} as const;

export type UuxKitDocCode = typeof uuxKitDocCode;
