import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { UuxKitDocCode, uuxKitDocCode } from './data/uux-kit-doc-code';
import { kitSharedImports } from '../shared/kitSharedImports';

@Component({
  selector: 'app-uux-kit',
  imports: [ ...kitSharedImports ],
  templateUrl: './uux-kit.html',
  styleUrl: './uux-kit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UuxKit {
  componentService = inject(ComponentService);
  docCode = signal<UuxKitDocCode>(uuxKitDocCode);
}
