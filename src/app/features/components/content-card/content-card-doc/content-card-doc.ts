import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { contentCardDocCode, ContentCardDocCode } from './data/content-card-doc-code';
import { contentCardDocTables } from './data/content-card-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-content-card-doc',
  imports: [...docSharedImports],
  templateUrl: './content-card-doc.html',
  styleUrl: './content-card-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardDoc implements OnInit {
  docCode = signal<ContentCardDocCode>(contentCardDocCode);
  docTables = signal(contentCardDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Content Card • UUX Angular',
      description: 'UUX Content Card component documentation',
      image: '/assets/thumbnails/content-card_thumbnail_1200px.webp',
      url: '/components/content-card/documentation',
      type: 'article'
    });
  };
}
