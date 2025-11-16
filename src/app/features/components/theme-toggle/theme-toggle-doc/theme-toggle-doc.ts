import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { themeToggleDocCode, ThemeToggleDocCode } from './data/theme-toggle-doc-code';
import { themeToggleDocTables } from './data/theme-toggle-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-theme-toggle-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './theme-toggle-doc.html',
  styleUrl: './theme-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleDoc {
  docCode = signal<ThemeToggleDocCode>(themeToggleDocCode);
  docTables = signal(themeToggleDocTables);
}
