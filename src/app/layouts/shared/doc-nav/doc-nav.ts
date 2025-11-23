import { ChangeDetectionStrategy, Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocSectionItem } from '@app/core/data/data.types';
import { DocService } from '@app/core/services/doc-service/doc-service';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { RouterService } from '@app/core/services/router-service/router-service';
import { ScrollService } from '@app/core/services/scroll-service/scroll-service';
import { NgLinkButton } from 'ng-link-button';

@Component({
  selector: 'app-doc-nav',
  imports: [NgLinkButton],
  templateUrl: './doc-nav.html',
  styleUrl: './doc-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocNav {

  activatedRoute = inject(ActivatedRoute);
  scrollService = inject(ScrollService);
  routerService = inject(RouterService);

  name = input<string>();

  docService = inject(DocService);
  kitService = inject(KitService);

  itemName = signal<string | null>(this.routerService.routeItem());


}
