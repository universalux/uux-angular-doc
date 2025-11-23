import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { linkButtonDocCode, LinkButtonDocCode } from './data/link-button-doc-code';
import { linkButtonDocTables } from './data/link-button-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-link-button-doc',
  imports: [...docSharedImports ],
  templateUrl: './link-button-doc.html',
  styleUrl: './link-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonDoc {
  docCode = signal<LinkButtonDocCode>(linkButtonDocCode);
  docTables = signal(linkButtonDocTables);
}
