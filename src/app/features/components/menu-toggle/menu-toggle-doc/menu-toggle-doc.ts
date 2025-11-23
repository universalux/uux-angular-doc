import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { menuToggleDocCode, MenuToggleDocCode } from './data/menu-toggle-doc-code';
import { menuToggleDocTables } from './data/menu-toggle-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-menu-toggle-doc',
  imports: [...docSharedImports ],
  templateUrl: './menu-toggle-doc.html',
  styleUrl: './menu-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleDoc {
  docCode = signal<MenuToggleDocCode>(menuToggleDocCode);
  docTables = signal(menuToggleDocTables);
}
