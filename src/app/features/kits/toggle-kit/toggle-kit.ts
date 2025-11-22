import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DocSectionTitle } from "@app/features/components/shared/doc/doc-section-title/doc-section-title";
import { Divider } from "@app/shared/ui/divider/divider";
import { ContentCarouselItemDirective, NgContentCarousel } from "ng-content-carousel";
import { KitService } from '@app/core/services/kit-service/kit-service';
import { CatalogItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { NgContentCard } from "ng-content-card";
import { NgLinkButton } from "ng-link-button";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { ToggleKitDocCode, toggleKitDocCode } from './data/toggle-kit-doc-code';

@Component({
  selector: 'app-toggle-kit',
  imports: [DocSectionTitle, Divider, NgContentCarousel, NgContentCard, NgLinkButton, ContentCarouselItemDirective, CodeBlock],
  templateUrl: './toggle-kit.html',
  styleUrl: './toggle-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleKit implements OnInit {

  kitService = inject(KitService);
  componentService = inject(ComponentService);
  includedComponents = signal<CatalogItem[] | null>(null);
  docCode = signal<ToggleKitDocCode>(toggleKitDocCode);

  ngOnInit(): void {
    const currentKit = this.kitService.currentKit();
    const included = this.componentService.componentList().filter((component) => component.kitId === currentKit);
    this.includedComponents.set(included);
  }

}
