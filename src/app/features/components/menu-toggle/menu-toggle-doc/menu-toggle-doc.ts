import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { menuToggleDocCode, MenuToggleDocCode } from './data/menu-toggle-doc-code';
import { menuToggleDocTables } from './data/menu-toggle-doc-tables';
import { DocSectionTitle } from '@app/shared/ui/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-menu-toggle-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './menu-toggle-doc.html',
  styleUrl: './menu-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleDoc {
  docCode = signal<MenuToggleDocCode>(menuToggleDocCode);
  docTables = signal(menuToggleDocTables);
}
