import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { themeToggleDocCode, ThemeToggleDocCode } from './data/theme-toggle-doc-code';
import { themeToggleDocTables } from './data/theme-toggle-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-theme-toggle-doc',
  imports: [...docSharedImports ],
  templateUrl: './theme-toggle-doc.html',
  styleUrl: './theme-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleDoc {
  docCode = signal<ThemeToggleDocCode>(themeToggleDocCode);
  docTables = signal(themeToggleDocTables);
}
