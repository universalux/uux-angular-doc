import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SimpleButtonDocCode, simpleButtonDocCode } from './data/simple-button-doc-code';
import { SimpleButtonDocTables, simpleButtonDocTables } from './data/simple-button-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-simple-button-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  docCode = signal<SimpleButtonDocCode>(simpleButtonDocCode);
  docTables = signal<SimpleButtonDocTables>(simpleButtonDocTables);
}
