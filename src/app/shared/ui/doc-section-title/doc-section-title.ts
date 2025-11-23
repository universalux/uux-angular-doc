import { ChangeDetectionStrategy, Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { DocSectionItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocService } from '@app/core/services/doc-service/doc-service';
import { ScrollService } from '@app/core/services/scroll-service/scroll-service';
import { SectionInViewDirective } from '@app/core/directives/section-in-view.directive';
import { RouterService } from '@app/core/services/router-service/router-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'doc-section-title',
  imports: [SectionInViewDirective, RouterLink],
  template: `
    <h2 sectionInView (visibleChange)="scrollService.updateActive(currentItem() + '-' + sectionCode(), $event)"
    >
      <a [id]="currentItem() + '-' + sectionCode()" routerLink="." [fragment]="currentItem() + '-' + sectionCode()">{{sectionName()}}</a>

    </h2>
  `,
  styleUrl: './doc-section-title.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocSectionTitle implements OnInit {

  componentService = inject(ComponentService);
  docService = inject(DocService);
  scrollService = inject(ScrollService);
  routerService = inject(RouterService);

  sectionCode = input<string | null>(null);

  currentItem = signal<string | null>(this.routerService.routeItem());
  sectionName = signal<string | null>(null);

  ngOnInit(): void {
    this.getSectionData();
    this.getCurrentItem();
  }

  constructor(){
    effect(() => {
      this.routerService.routeItem();
      this.getCurrentItem();
    })
  }

  getCurrentItem(){
    this.currentItem.set(this.routerService.routeItem());
  };

  getSectionData(){
    let sections : DocSectionItem[] = this.docService.docSections();

    const sectionObj = sections.find(section => section.code === this.sectionCode());
    if(!sectionObj) return;
    this.sectionName.set(sectionObj.name);
  }
}
