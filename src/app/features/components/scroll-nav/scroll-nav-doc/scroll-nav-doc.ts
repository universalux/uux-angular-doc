import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { scrollNavDocCode, ScrollNavDocCode } from './data/scroll-nav-doc-code';
import { scrollNavDocTables } from './data/scroll-nav-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-scroll-nav-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './scroll-nav-doc.html',
  styleUrl: './scroll-nav-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollNavDoc {
  docCode = signal<ScrollNavDocCode>(scrollNavDocCode);
  docTables = signal(scrollNavDocTables);
}
