import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { docSectionList } from '@app/core/data/components.data';
import { DocSectionItem } from '@app/core/data/data.types';
import { DocService } from '@app/core/services/doc-service/doc-service';
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

  component = input<string>();

  // docSections = signal<DocSectionItem[]>(docSectionList);
  docService = inject(DocService);

}
