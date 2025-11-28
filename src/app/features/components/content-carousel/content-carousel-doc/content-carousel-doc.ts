import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ContentCarouselDocCode, contentCarouselDocCode } from './data/content-carousel-doc-code';
import { contentCarouselDocTables } from './data/content-carousel-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-content-carousel-doc',
  imports: [ ...docSharedImports ],
  templateUrl: './content-carousel-doc.html',
  styleUrl: './content-carousel-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCarouselDoc implements OnInit {
  docCode = signal<ContentCarouselDocCode>(contentCarouselDocCode);
  docTables = signal(contentCarouselDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Content Carousel • UUX Angular',
      description: 'UUX Content Carousel component documentation',
      image: '/components/content-carousel',
      url: '/components/content-carousel/documentation',
      type: 'article'
    });
  };
}
