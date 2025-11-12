import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocSectionTitle } from '../../shared/doc-ui/doc-section-title/doc-section-title';

@Component({
  selector: 'app-simple-button-doc',
  imports: [DocSectionTitle],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  componentService = inject(ComponentService);
}
