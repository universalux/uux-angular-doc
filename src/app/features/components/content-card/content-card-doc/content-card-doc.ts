import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { contentCardDocCode, ContentCardDocCode } from './data/content-card-doc-code';
import { contentCardDocTables } from './data/content-card-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';

@Component({
  selector: 'app-content-card-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable],
  templateUrl: './content-card-doc.html',
  styleUrl: './content-card-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardDoc {
  componentService = inject(ComponentService);
  docCode = signal<ContentCardDocCode>(contentCardDocCode);
  docTables = signal(contentCardDocTables);
}
