import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const expandGroupDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.outputTableHeader,
    tableRows: [
      ['(expandedItem)', 'Get the index of the current expanded item (number or null )', 'null'],
    ],
  },
  styTable_1: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        '---expand-group-gap',
        'Gap between ng-expand items inside..',
        '.5rem'
      ],
    ]
  },
} as const satisfies DataTableDataList;

export type ExpandGroupDocTables = typeof expandGroupDocTables;
