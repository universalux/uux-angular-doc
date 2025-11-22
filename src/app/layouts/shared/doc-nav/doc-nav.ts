import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocSectionItem } from '@app/core/data/data.types';
import { DocService } from '@app/core/services/doc-service/doc-service';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { NgLinkButton } from 'ng-link-button';

@Component({
  selector: 'app-doc-nav',
  imports: [NgLinkButton],
  templateUrl: './doc-nav.html',
  styleUrl: './doc-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocNav implements OnInit {

  activatedRoute = inject(ActivatedRoute);

  name = input<string>();
  type = input<'component' |'kit'>('component');

  docService = inject(DocService);
  kitService = inject(KitService);

  docSections = signal<DocSectionItem[]>([]);
  kitName = signal<string | null>(this.kitService.currentKit());

  ngOnInit(): void {
    if(this.type() === 'component'){
      this.docSections.set(this.docService.componentDocSections());
    }

    if(this.type() === 'kit'){
      this.docSections.set(this.docService.kitDocSections());
    }
  }

}
