import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { ButtonKitDocCode, buttonKitDocCode } from './data/button-kit-doc-code';
import { DocSectionTitle } from "@app/features/components/shared/doc/doc-section-title/doc-section-title";
import { Divider } from "@app/shared/ui/divider/divider";
import { ContentCarouselItemDirective, NgContentCarousel } from "ng-content-carousel";
import { NgLinkButton } from "ng-link-button";
import { NgContentCard } from "ng-content-card";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";

@Component({
  selector: 'app-button-kit',
  imports: [DocSectionTitle, Divider, NgContentCarousel, NgLinkButton, NgContentCard, CodeBlock, ContentCarouselItemDirective],
  templateUrl: './button-kit.html',
  styleUrl: './button-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonKit {

  kitService = inject(KitService);
  componentService = inject(ComponentService);
  includedComponents = signal<CatalogItem[] | null>(null);
  docCode = signal<ButtonKitDocCode>(buttonKitDocCode);

  ngOnInit(): void {
    const currentKit = this.kitService.currentKit();
    const included = this.componentService.componentList().filter((component) => component.kitId === currentKit);
    this.includedComponents.set(included);
  }

}
