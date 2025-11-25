import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { NgExpandGroup } from 'ng-expand-group';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

@Component({
  selector: 'app-expand-group-playground',
  imports: [...pgSharedImports, NgExpandGroup],
  templateUrl: './expand-group-playground.html',
  styleUrl: './expand-group-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandGroupPlayground implements OnInit {

  // Functionality options
  expandedItemSignal = signal< number |null>(null);
  getCurrentExpanded = signal<boolean>(true);

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.getCurrentExpanded()) attrs.push(`(expandedItem)="expandedItemSignal.set($event)"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-expand-group ${attrString ? '' + attrString : ''}>
          <ng-expand label="Expand button label 1">
            <p>This is the content 1</p>
          </ng-expand>
          <ng-expand label="Expand button label 2">
            <p>This is the content 2</p>
          </ng-expand>
        </ng-expand>
      `);
    });
  }

  // FUNCTIONALITY OPTIONS

  handleGetCurrentExpandedInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.getCurrentExpanded.set(selectElement.value === 'true' ? true : false);
  }

  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Expand Group • UUX Angular',
      description: 'UUX Expand Group (accordion) component playground',
      image: '/assets/images/thumbnails/expand_thumbnail_1200px.webp',
      url: '/components/expand-group/playground',
      type: 'website'
    });
  };
}
