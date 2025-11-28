import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';
import { NgContentCard } from 'ng-content-card';

@Component({
  selector: 'app-components-page',
  imports: [NgContentCard, RouterLink],
  templateUrl: './components-page.html',
  styleUrl: './components-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsPage implements OnInit {
  componentService = inject(ComponentService);
  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Components • UUX Angular',
      description: 'Explore UUX Angular components',
      image: '/components',
      url: '/components'
    });
  };
}
