import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { heroCarouselDocCode, HeroCarouselDocCode } from './data/hero-carousel-doc-code';
import { heroCarouselDocTables } from './data/hero-carousel-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-hero-carousel-doc',
  imports: [...docSharedImports ],
  templateUrl: './hero-carousel-doc.html',
  styleUrl: './hero-carousel-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCarouselDoc {
  docCode = signal<HeroCarouselDocCode>(heroCarouselDocCode);
  docTables = signal(heroCarouselDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Hero Carousel • UUX Angular',
      description: 'UUX Hero Carousel component documentation',
      image: '/assets/images/thumbnails/hero-carousel_thumbnail_1200px.webp',
      url: '/components/hero-carousel/documentation',
      type: 'article'
    });
  };
}
