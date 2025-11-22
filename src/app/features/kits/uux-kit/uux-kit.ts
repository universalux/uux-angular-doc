import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DocSectionTitle } from "@app/features/components/shared/doc/doc-section-title/doc-section-title";
import { Divider } from "@app/shared/ui/divider/divider";
import { ContentCarouselItemDirective, NgContentCarousel } from "ng-content-carousel";
import { NgLinkButton } from "ng-link-button";
import { NgContentCard } from "ng-content-card";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { ComponentService } from '@app/core/services/component-service/component-service';
import { UuxKitDocCode, uuxKitDocCode } from './data/uux-kit-doc-code';

@Component({
  selector: 'app-uux-kit',
  imports: [DocSectionTitle, Divider, NgContentCarousel, NgLinkButton, NgContentCard, CodeBlock, ContentCarouselItemDirective],
  templateUrl: './uux-kit.html',
  styleUrl: './uux-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UuxKit {
  componentService = inject(ComponentService);
  docCode = signal<UuxKitDocCode>(uuxKitDocCode);
}
