import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { CatalogItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { ToggleKitDocCode, toggleKitDocCode } from './data/toggle-kit-doc-code';
import { kitSharedImports } from '../shared/kitSharedImports';

@Component({
  selector: 'app-toggle-kit',
  imports: [ ...kitSharedImports ],
  templateUrl: './toggle-kit.html',
  styleUrl: './toggle-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleKit implements OnInit {

  kitService = inject(KitService);
  componentService = inject(ComponentService);
  includedComponents = signal<CatalogItem[] | null>(null);
  docCode = signal<ToggleKitDocCode>(toggleKitDocCode);

  ngOnInit(): void {
    const currentKit = this.kitService.currentKit();
    const included = this.componentService.componentList().filter((component) => component.kitId === currentKit);
    this.includedComponents.set(included);
  }

}
