import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SimpleButtonDocCode, simpleButtonDocCode } from './data/simple-button-doc-code';
import { SimpleButtonDocTables, simpleButtonDocTables } from './data/simple-button-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-simple-button-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  docCode = signal<SimpleButtonDocCode>(simpleButtonDocCode);
  docTables = signal<SimpleButtonDocTables>(simpleButtonDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Simple Button • UUX Angular',
      description: 'UUX Simple Button component documentation',
      image: '/components/simple-button',
      url: '/components/simple-button/documentation',
      type: 'article'
    });
  };
}
