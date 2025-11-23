import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CatalogItem } from '@app/core/data/data.types';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { KitService } from '@app/core/services/kit-service/kit-service';
import { ButtonKitDocCode, buttonKitDocCode } from './data/button-kit-doc-code';
import { kitSharedImports } from '../shared/kitSharedImports';

@Component({
  selector: 'app-button-kit',
  imports: [ ...kitSharedImports ],
  templateUrl: './button-kit.html',
  styleUrl: './button-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonKit {

  kitService = inject(KitService);
  componentService = inject(ComponentService);
  includedComponents = signal<CatalogItem[] | null>(null);
  docCode = signal<ButtonKitDocCode>(buttonKitDocCode);

  ngOnInit(): void {
    const currentKit = this.kitService.currentKit();
    const included = this.componentService.componentList().filter((component) => component.kitId === currentKit);
    this.includedComponents.set(included);
  }

}
