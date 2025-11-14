import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { RouterLink } from '@angular/router';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { SimpleButtonDocCode, simpleButtonDocCode } from './simple-button-doc-code';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { simpleButtonDocTables } from './simple-button-doc-tables';

@Component({
  selector: 'app-simple-button-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  componentService = inject(ComponentService);
  docCode = signal<SimpleButtonDocCode>(simpleButtonDocCode);
  docTables = signal(simpleButtonDocTables);
}
