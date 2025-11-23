import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { heroCarouselDocCode, HeroCarouselDocCode } from './data/hero-carousel-doc-code';
import { heroCarouselDocTables } from './data/hero-carousel-doc-tables';
import { DocSectionTitle } from '@app/shared/ui/doc-section-title/doc-section-title';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { RouterLink } from '@angular/router';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-hero-carousel-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './hero-carousel-doc.html',
  styleUrl: './hero-carousel-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCarouselDoc {
  docCode = signal<HeroCarouselDocCode>(heroCarouselDocCode);
  docTables = signal(heroCarouselDocTables);
}
