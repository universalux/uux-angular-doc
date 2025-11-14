import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { themeToggleDocCode, ThemeToggleDocCode } from './data/theme-toggle-doc-code';
import { themeToggleDocTables } from './data/theme-toggle-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-toggle-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink],
  templateUrl: './theme-toggle-doc.html',
  styleUrl: './theme-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleDoc {
  componentService = inject(ComponentService);
  docCode = signal<ThemeToggleDocCode>(themeToggleDocCode);
  docTables = signal(themeToggleDocTables);
}
