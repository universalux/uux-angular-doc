import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { scrollNavDocCode, ScrollNavDocCode } from './data/scroll-nav-doc-code';
import { scrollNavDocTables } from './data/scroll-nav-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';
import { Divider } from '@app/shared/ui/divider/divider';

@Component({
  selector: 'app-scroll-nav-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './scroll-nav-doc.html',
  styleUrl: './scroll-nav-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollNavDoc {
  docCode = signal<ScrollNavDocCode>(scrollNavDocCode);
  docTables = signal(scrollNavDocTables);
}
