import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { linkButtonDocCode, LinkButtonDocCode } from './data/link-button-doc-code';
import { linkButtonDocTables } from './data/link-button-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-link-button-doc',
  imports: [...docSharedImports ],
  templateUrl: './link-button-doc.html',
  styleUrl: './link-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonDoc {
  docCode = signal<LinkButtonDocCode>(linkButtonDocCode);
  docTables = signal(linkButtonDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Link Button • UUX Angular',
      description: 'UUX Link Button component documentation',
      image: '/assets/thumbnails/link-button_thumbnail_1200px.webp',
      url: '/components/link-button/documentation',
      type: 'article'
    });
  };
}
