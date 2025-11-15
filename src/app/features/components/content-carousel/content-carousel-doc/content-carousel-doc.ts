import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { ContentCarouselDocCode, contentCarouselDocCode } from './data/content-carousel-doc-code';
import { contentCarouselDocTables } from './data/content-carousel-doc-tables';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';
import { Divider } from '@app/shared/ui/divider/divider';

@Component({
  selector: 'app-content-carousel-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './content-carousel-doc.html',
  styleUrl: './content-carousel-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCarouselDoc {
  componentService = inject(ComponentService);
  docCode = signal<ContentCarouselDocCode>(contentCarouselDocCode);
  docTables = signal(contentCarouselDocTables);
}
