import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { docSharedImports } from '../../shared/docSharedImports';
import { ratingsDocCode, RatingsDocCode } from './data/ratings-doc-code';
import { RatingsDocTables, ratingsDocTables } from './data/ratings-doc-tables';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-ratings-doc',
  imports: [...docSharedImports],
  templateUrl: './ratings-doc.html',
  styleUrl: './ratings-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingsDoc {
  docCode = signal<RatingsDocCode>(ratingsDocCode);
  docTables = signal<RatingsDocTables>(ratingsDocTables);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Ratings • UUX Angular',
      description: 'UUX Rating component documentation',
      image: '/components/ratings',
      url: '/components/ratings/documentation',
      type: 'article'
    });
  };
}
