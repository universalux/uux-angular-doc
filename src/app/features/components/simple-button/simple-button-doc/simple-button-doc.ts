import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocSectionTitle } from '../../shared/doc-ui/doc-section-title/doc-section-title';
import { RouterLink } from '@angular/router';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { SingleButtonDocCode, singleButtonDocCode } from './single-button-doc-code';

@Component({
  selector: 'app-simple-button-doc',
  imports: [DocSectionTitle, CodeBlock ,RouterLink],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  componentService = inject(ComponentService);
  docCode = signal<SingleButtonDocCode>(singleButtonDocCode);
}
