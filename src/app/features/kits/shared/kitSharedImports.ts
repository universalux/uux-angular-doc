import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { Divider } from "@app/shared/ui/divider/divider";
import { DocSectionTitle } from "@app/shared/ui/doc-section-title/doc-section-title";
import { NgContentCard } from "ng-content-card";
import { ContentCarouselItemDirective, NgContentCarousel } from "ng-content-carousel";
import { NgLinkButton } from "ng-link-button";

export const kitSharedImports = [
  DocSectionTitle,
  Divider,
  NgContentCarousel,
  ContentCarouselItemDirective,
  NgLinkButton,
  NgContentCard,
  CodeBlock
];
