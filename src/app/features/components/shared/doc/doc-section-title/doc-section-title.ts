import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { DocSectionItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocService } from '@app/core/services/doc-service/doc-service';

@Component({
  selector: 'doc-section-title',
  imports: [],
  template: `
    <h2 [id]="componentService.currentComponent() + '-' + sectionCode()">
      {{sectionName()}}
    </h2>
  `,
  styleUrl: './doc-section-title.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocSectionTitle implements OnInit {

  componentService = inject(ComponentService);
  docService = inject(DocService);

  sectionCode = input<string | null>(null);
  sectionName = signal<string | null>(null);
  type = input<'component' | 'kit'>('component');

  ngOnInit(): void {
    this.getSectionData();
  }

  getSectionData(){
    let sections : DocSectionItem[] = [];

    if(this.type() === 'component'){
      sections = this.docService.componentDocSections();
    };

    if(this.type() === 'kit'){
      sections = this.docService.kitDocSections();
    };

    const sectionObj = sections.find(section => section.code === this.sectionCode());
    if(!sectionObj) return;
    this.sectionName.set(sectionObj.name);
  }
}
