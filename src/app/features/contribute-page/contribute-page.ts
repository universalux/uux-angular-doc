import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';
import { NgContentCard } from 'ng-content-card';

type ContributeOptions = {
  label: string;
  url: string;
  icon: string;
  alt: string;
};

type Repositories = {
  name: string;
  description: string;
  url: string;
}


@Component({
  selector: 'app-contribute-page',
  imports: [NgContentCard],
  templateUrl: './contribute-page.html',
  styleUrl: './contribute-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContributePage implements OnInit {

  metaTagsService = inject(MetaTagsService);

  contributeOptions = signal<ContributeOptions[]>([
    {
      label: 'Report a bug',
      url: 'https://github.com/universalux/uux-hub/issues/new?assignees=aldaydev&labels=bug&template=angular_bug_report.yml',
      icon: 'assets/images/icons/bug.svg',
      alt: 'Bug icon'
    },
    {
      label: 'Request an improvement for an existing component',
      url: 'https://github.com/universalux/uux-hub/issues/new?assignees=aldaydev&labels=bug&template=angular_feature_request.yml',
      icon: 'assets/images/icons/lightbulb.svg',
      alt: 'Lightbulb icon'
    },
    {
      label: 'Suggest a new component',
      url: 'https://github.com/universalux/uux-hub/issues/new?assignees=aldaydev&labels=bug&template=new_component_request.yml',
      icon: 'assets/images/icons/bolt.svg',
      alt: 'Bolt icon'
    }
  ]);

  repositories = signal<Repositories[]>([
    {
      name: 'uux-angular-doc',
      description: 'Documentation and interactive playgrounds for the Universal UX Angular component library (this app).',
      url: 'https://github.com/universalux/uux-angular-doc'
    },
    {
      name: 'uux-angular',
      description: 'Repository for developing Angular UI components for Universal UX (UUX) – includes source code, tests, and build setup.',
      url: 'https://github.com/universalux/uux-angular'
    },
    {
      name: 'uux-hub',
      description: 'Central hub for community feedback, assets and visual showcases for the UUX component ecosystem (issues, gifs, screenshots, docs resources).',
      url: 'https://github.com/universalux/uux-hub'
    },
  ]);

  currentDescription = signal<string | null>(null);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Contribute • UUX Angular',
      description: 'Learn how to contribute with Universal UX',
      image: '/assets/thumbnails/contribute_thumbnail_1200px.webp',
      url: '/contribute'
    });
  };
}
