import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { expandDocCode, ExpandDocCode } from './data/expand-doc-code';
import { ExpandDocTables, expandDocTables } from './data/expand-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-expand-doc',
  imports: [...docSharedImports],
  templateUrl: './expand-doc.html',
  styleUrl: './expand-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandDoc implements OnInit {
  docCode = signal<ExpandDocCode>(expandDocCode);
  docTables = signal<ExpandDocTables>(expandDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Expand • UUX Angular',
      description: 'UUX Expand component documentation',
      image: '/components/expand',
      url: '/components/expand/documentation',
      type: 'article'
    });
  };
}
