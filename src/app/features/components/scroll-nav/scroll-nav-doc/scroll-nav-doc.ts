import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { scrollNavDocCode, ScrollNavDocCode } from './data/scroll-nav-doc-code';
import { scrollNavDocTables } from './data/scroll-nav-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-scroll-nav-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './scroll-nav-doc.html',
  styleUrl: './scroll-nav-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollNavDoc {
  docCode = signal<ScrollNavDocCode>(scrollNavDocCode);
  docTables = signal(scrollNavDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Scroll Nav • UUX Angular',
      description: 'UUX Scroll Nav component documentation',
      image: '/assets/images/thumbnails/scroll-nav_thumbnail_1200px.webp',
      url: '/components/scroll-nav/documentation',
      type: 'article'
    });
  };
}
