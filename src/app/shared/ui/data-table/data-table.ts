import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DataTableData } from './data-table.types';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTable {
  tableData = input<DataTableData | null>(null);
}
