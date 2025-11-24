import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';
import { NgContentCard } from 'ng-content-card';


@Component({
  selector: 'app-kits-page',
  imports: [NgContentCard, RouterLink],
  templateUrl: './kits-page.html',
  styleUrl: './kits-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KitsPage implements OnInit {
  kitService = inject(KitService);

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Kits • UUX Angular',
      description: 'Explore UUX Angular kits',
      image: '/assets/thumbnails/kits_thumbnail_1200px.webp',
      url: '/kits'
    });
  };
}
