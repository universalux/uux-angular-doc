import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { UuxKitDocCode, uuxKitDocCode } from './data/uux-kit-doc-code';
import { kitSharedImports } from '../shared/kitSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-uux-kit',
  imports: [ ...kitSharedImports ],
  templateUrl: './uux-kit.html',
  styleUrl: './uux-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UuxKit implements OnInit{
  componentService = inject(ComponentService);
  docCode = signal<UuxKitDocCode>(uuxKitDocCode);

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'UUX Kit • UUX Angular',
      description: 'UUX Complete Kit documentation',
      image: '/kits/uux-kit',
      url: '/kits/uux-kit'
    });
  };
}
