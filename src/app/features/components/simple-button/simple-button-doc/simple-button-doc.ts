import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ComponentService } from '@app/core/services/component-service/component-service';
import { DocSectionTitle } from '../../shared/doc/doc-section-title/doc-section-title';
import { RouterLink } from '@angular/router';
import { CodeBlock } from '@app/shared/ui/code-block/code-block';
import { SimpleButtonDocCode, simpleButtonDocCode } from './data/simple-button-doc-code';
import { DataTable } from '@app/shared/ui/data-table/data-table';
import { simpleButtonDocTables } from './data/simple-button-doc-tables';
import { Divider } from "@app/shared/ui/divider/divider";

@Component({
  selector: 'app-simple-button-doc',
  imports: [DocSectionTitle, CodeBlock, DataTable, RouterLink, Divider],
  templateUrl: './simple-button-doc.html',
  styleUrl: './simple-button-doc.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleButtonDoc {
  componentService = inject(ComponentService);
  docCode = signal<SimpleButtonDocCode>(simpleButtonDocCode);
  docTables = signal(simpleButtonDocTables);
}
