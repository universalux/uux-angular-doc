import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DocSectionTitle } from "@app/shared/ui/doc-section-title/doc-section-title";
import { Divider } from "@app/shared/ui/divider/divider";
import { CodeBlock } from "@app/shared/ui/code-block/code-block";
import { DataTable } from "@app/shared/ui/data-table/data-table";
import { expandDocCode, ExpandDocCode } from './data/expand-doc-code';
import { ExpandDocTables, expandDocTables } from './data/expand-doc-tables';

@Component({
  selector: 'app-expand-doc',
  imports: [DocSectionTitle, Divider, CodeBlock, DataTable],
  templateUrl: './expand-doc.html',
  styleUrl: './expand-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandDoc {
  docCode = signal<ExpandDocCode>(expandDocCode);
  docTables = signal<ExpandDocTables>(expandDocTables);
}
