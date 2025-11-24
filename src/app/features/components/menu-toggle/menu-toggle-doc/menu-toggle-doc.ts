import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { menuToggleDocCode, MenuToggleDocCode } from './data/menu-toggle-doc-code';
import { menuToggleDocTables } from './data/menu-toggle-doc-tables';
import { docSharedImports } from '../../shared/docSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-menu-toggle-doc',
  imports: [...docSharedImports ],
  templateUrl: './menu-toggle-doc.html',
  styleUrl: './menu-toggle-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleDoc {
  docCode = signal<MenuToggleDocCode>(menuToggleDocCode);
  docTables = signal(menuToggleDocTables);

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Menu Toggle • UUX Angular',
      description: 'UUX Menu Toggle component documentation',
      image: '/assets/thumbnails/menu-toggle_thumbnail_1200px.webp',
      url: '/components/menu-toggle/documentation',
      type: 'article'
    });
  };
}
