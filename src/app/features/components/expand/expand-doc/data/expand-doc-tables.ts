import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const expandDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      ['label', 'Choose the text for the expand/collapse button.', '-'],
    ],
  },
  ioTable_2: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        'startExpanded',
        'Set the initial state (expanded or collapsed) for the component.',
        'false',
      ],
      [
        'iconType',
        'Choose between two different icon types: arrow or plus (+).',
        "'arrow'",
      ]
    ],
  },
  ioTable_3: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        'tabIndex',
        'Controls the button’s tab order in keyboard navigation.',
        '0',
      ],
    ],
  },
  styTable_1: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        '--expand-width',
        'Sets the component width.',
        '100%'
      ],
      [
        '--expand-height',
        'Sets the component height.',
        'fit-content'
      ],
      [
        '--expand-color',
        'Defines the text color of the component.',
        'inherit'
      ],
      [
        '--expand-bg',
        'Defines the background of the component.',
        'transparent'
      ],
      [
        '--expand-border',
        'Applies a border to the component.',
        'none'
      ],
      [
        '--expand-border-radius',
        'Sets the border radius of the component container.',
        '.3rem'
      ],
      [
        '--expand-gap',
        'Sets the gap between button and content when open.',
        '0'
      ],
      [
        '--expand-transition-duration',
        'Duration of the expand/collapse transition.',
        '.3s'
      ],
      [
        '--expand-hover-transition-duration',
        'Duration of hover animations.',
        '0s'
      ],
      [
        '--expand-icon-color',
        'Color of the arrow/plus icon.',
        'currentColor (via fallback chain)'
      ],
      [
        '--expand-icon-size',
        'Size of the arrow/plus icon.',
        '1.1rem'
      ]
    ]
  },
  styTable_2: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        '--expand-button-color',
        'Button text/icon color.',
        'var(--expand-color, inherit)'
      ],
      [
        '--expand-button-bg',
        'Button background color.',
        'var(--expand-bg, black)'
      ],
      [
        '--expand-button-border',
        'Button border style.',
        'none'
      ],
      [
        '--expand-button-text-align',
        'Button text alignment.',
        'left'
      ],
      [
        '--expand-button-padding',
        'Button padding.',
        '1rem'
      ],
      [
        '--expand-button-hover-bg',
        'Background on hover.',
        'color-mix(...) (fallback chain)'
      ],
      [
        '--expand-button-hover-color',
        'Text color on hover.',
        'var(--expand-button-color)'
      ],
      [
        '--expand-button-expanded-bg',
        'Background when expanded.',
        'var(--expand-button-hover-bg)'
      ],
      [
        '--expand-button-expanded-color',
        'Text color when expanded.',
        'var(--expand-button-hover-color)'
      ],
      [
        '--expand-button-focus-ring',
        'Focus outline style.',
        '2px solid currentColor'
      ],
      [
        '--expand-button-font-size',
        'Font size for the button label.',
        '1rem'
      ],
      [
        '--expand-button-font-weight',
        'Font weight for the button label.',
        '500'
      ]
    ]
  },
  styTable_3: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        '--expand-content-padding',
        'Padding applied to the expandable content area.',
        '1rem'
      ],
      [
        '--expand-content-bg',
        'Background color of the content area.',
        'var(--expand-bg, black)'
      ],
      [
        '--expand-content-color',
        'Text color of the content area.',
        'var(--expand-color, inherit)'
      ]
    ]
  },
} as const satisfies DataTableDataList;

export type ExpandDocTables = typeof expandDocTables;
