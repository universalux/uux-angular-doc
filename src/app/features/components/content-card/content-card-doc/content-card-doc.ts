import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { contentCardDocCode, ContentCardDocCode } from './data/content-card-doc-code';
import { contentCardDocTables } from './data/content-card-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { Divider } from '@app/shared/ui/divider/divider';

@Component({
  selector: 'app-content-card-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, Divider],
  templateUrl: './content-card-doc.html',
  styleUrl: './content-card-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardDoc {
  docCode = signal<ContentCardDocCode>(contentCardDocCode);
  docTables = signal(contentCardDocTables);
}
