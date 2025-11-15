import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { menuToggleDocCode, MenuToggleDocCode } from './data/menu-toggle-doc-code';
import { menuToggleDocTables } from './data/menu-toggle-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
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
  componentService = inject(ComponentService);
  docCode = signal<MenuToggleDocCode>(menuToggleDocCode);
  docTables = signal(menuToggleDocTables);
}
