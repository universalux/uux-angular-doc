import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { themeToggleDocCode, ThemeToggleDocCode } from './data/theme-toggle-doc-code';
import { themeToggleDocTables } from './data/theme-toggle-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-theme-toggle-doc',
  imports: [...docSharedImports ],
  templateUrl: './theme-toggle-doc.html',
  styleUrl: './theme-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleDoc {
  docCode = signal<ThemeToggleDocCode>(themeToggleDocCode);
  docTables = signal(themeToggleDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Theme Toggle • UUX Angular',
      description: 'UUX Theme Toggle component documentation',
      image: '/assets/images/thumbnails/theme-toggle_thumbnail_1200px.webp',
      url: '/components/theme-toggle/documentation',
      type: 'article'
    });
  };
}
