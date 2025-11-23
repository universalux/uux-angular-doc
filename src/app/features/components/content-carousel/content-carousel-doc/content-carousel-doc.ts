import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ContentCarouselDocCode, contentCarouselDocCode } from './data/content-carousel-doc-code';
import { contentCarouselDocTables } from './data/content-carousel-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

@Component({
  selector: 'app-content-carousel-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './content-carousel-doc.html',
  styleUrl: './content-carousel-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCarouselDoc {
  docCode = signal<ContentCarouselDocCode>(contentCarouselDocCode);
  docTables = signal(contentCarouselDocTables);
}
