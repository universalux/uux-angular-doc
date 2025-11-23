import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { expandDocCode, ExpandDocCode } from './data/expand-doc-code';
import { ExpandDocTables, expandDocTables } from './data/expand-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-expand-doc',
  imports: [...docSharedImports],
  templateUrl: './expand-doc.html',
  styleUrl: './expand-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandDoc {
  docCode = signal<ExpandDocCode>(expandDocCode);
  docTables = signal<ExpandDocTables>(expandDocTables);
}
