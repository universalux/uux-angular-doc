import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { contentCardDocCode, ContentCardDocCode } from './data/content-card-doc-code';
import { contentCardDocTables } from './data/content-card-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-content-card-doc',
  imports: [...docSharedImports],
  templateUrl: './content-card-doc.html',
  styleUrl: './content-card-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardDoc {
  docCode = signal<ContentCardDocCode>(contentCardDocCode);
  docTables = signal(contentCardDocTables);
}
