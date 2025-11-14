import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { linkButtonDocCode, LinkButtonDocCode } from './data/link-button-doc-code';
import { linkButtonDocTables } from './data/link-button-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-button-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink],
  templateUrl: './link-button-doc.html',
  styleUrl: './link-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonDoc {
  componentService = inject(ComponentService);
  docCode = signal<LinkButtonDocCode>(linkButtonDocCode);
  docTables = signal(linkButtonDocTables);
}
