import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { CatalogItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { ToggleKitDocCode, toggleKitDocCode } from './data/toggle-kit-doc-code';
import { kitSharedImports } from '../shared/kitSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-toggle-kit',
  imports: [ ...kitSharedImports ],
  templateUrl: './toggle-kit.html',
  styleUrl: './toggle-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleKit implements OnInit {

  kitService = inject(KitService);
  componentService = inject(ComponentService);
  includedComponents = signal<CatalogItem[] | null>(null);
  docCode = signal<ToggleKitDocCode>(toggleKitDocCode);

  metaTagsService = inject(MetaTagsService);

  ngOnInit(): void {
    const currentKit = this.kitService.currentKit();
    const included = this.componentService.componentList().filter((component) => component.kitId === currentKit);
    this.includedComponents.set(included);

    this.metaTagsService.setMetaTags({
      title: 'Toggle Kit • UUX Angular',
      description: 'UUX Toggle Kit documentation',
      image: '/assets/images/thumbnails/toggle-kit_thumbnail_1200px.webp',
      url: '/kits/toggle-kit'
    });
  }

}
