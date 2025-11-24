import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { pgSharedImports } from '../../shared/playgroundSharedImports';
import { MetaTagsService } from '@app/core/services/meta-tags-service/meta-tags-service';

type ExpandIconType = 'arrow' | 'plus';

@Component({
  selector: 'app-expand-playground',
  imports: [...pgSharedImports],
  templateUrl: './expand-playground.html',
  styleUrl: './expand-playground.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandPlayground implements OnInit {
  // Component inputs

  label = signal<string>('Expand button label example');
  startExpanded = signal<boolean>(false);
  iconType = signal<ExpandIconType>('arrow');

  tabIndex = signal<number>(0);

  // Functionalities
  randomNumber = signal<number>(0);

  // Code to show properties
  showCode = signal<boolean>(false);
  currentCode = signal<string>('');

  constructor() {
    effect(() => {
      const attrs: string[] = [];
      // We only add inputs to code if they are diferent form default values
      if (this.label()) attrs.push(`label="${this.label()}"`);
      if (this.startExpanded()) attrs.push(`[startExpanded]="${this.startExpanded()}"`);
      if (this.iconType() !== 'arrow') attrs.push(`iconType="${this.iconType()}"`);

      if (this.tabIndex() !== 0) attrs.push(`[tabIndex]="${this.tabIndex()}"`);

      // We join attributes with space (no line breaks)
      const attrString = attrs.join(' \n');

      this.currentCode.set(`
        <ng-expand ${attrString ? ' \n' + attrString : ''}
        >
          <p>Expandable content example</p>
        </ng-expand>
      `);
    });
  }

  // STYLE AND BEHAVIOR INPUT OPTIONS

  handleLabelInput(event: Event){
    const selectElement = event.target as HTMLInputElement;
    this.label.set(selectElement.value);
  }

  handleStartExpandedInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.startExpanded.set(selectElement.value === 'true' ? true : false);
  }

  handleIconTypeInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.iconType.set(selectElement.value as ExpandIconType);
  }


  // ACCESSIBILITY INPUT OPTIONS

  handleTabIndexInput(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.tabIndex.set(Number(selectElement.value));
  }


  // SHOW CODE METHOD

  toggleShowCode(){
    this.showCode.set(!this.showCode());
  }

  metaTagsService = inject(MetaTagsService);

  ngOnInit() {
    this.metaTagsService.setMetaTags({
      title: 'Expand • UUX Angular',
      description: 'UUX Expand component playground',
      image: '/assets/images/thumbnails/expand_thumbnail_1200px.webp',
      url: '/components/expand/playground',
      type: 'website'
    });
  };
}
