import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
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

  ngOnInit(): void {
    this.getSectionData();
  }

  getSectionData(){
    const sectionObj = this.docService.docSections().find(section => section.code === this.sectionCode());
    if(!sectionObj) return;
    this.sectionName.set(sectionObj.name);
  }
}
