import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { docSharedImports } from '../../shared/docSharedImports';
import { expandGroupDocCode, ExpandGroupDocCode } from './data/expand-group-doc-code';
import { expandGroupDocTables, ExpandGroupDocTables } from './data/expand-group-doc-tables';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-expand-group-doc',
  imports: [...docSharedImports],
  templateUrl: './expand-group-doc.html',
  styleUrl: './expand-group-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandGroupDoc implements OnInit {

  docCode = signal<ExpandGroupDocCode>(expandGroupDocCode);
  docTables = signal<ExpandGroupDocTables>(expandGroupDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Expand Group • UUX Angular',
      description: 'UUX Expand Group (accordion) component documentation',
      image: '/assets/images/thumbnails/expand_thumbnail_1200px.webp',
      url: '/components/expand-group/documentation',
      type: 'article'
    });
  };
}
