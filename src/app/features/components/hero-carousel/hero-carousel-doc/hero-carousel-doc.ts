import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroCarouselDocCode, HeroCarouselDocCode } from './data/hero-carousel-doc-code';
import { heroCarouselDocTables } from './data/hero-carousel-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';

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
}
