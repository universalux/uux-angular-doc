import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const simpleButtonDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.outputTableHeader,
    tableRows: [
      ['onClick', 'Emits a MouseEvent when the button is clicked.', '-'],
    ],
  },
  ioTable_2: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        'type',
        'Defines the button’s visual style (solid, minimal, or outline).',
        "'solid'",
      ],
      [
        'square',
        'Makes the button shape perfectly square instead of rounded.',
        'false',
      ],
      [
        'hover',
        'Sets the hover effect style (tone, scale, stroke, shadow, or none).',
        "'tone'",
      ],
      [
        'direction',
        'Arranges the button’s inner content horizontally or vertically. (row / column).',
        "'row'",
      ],
    ],
  },
  ioTable_3: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        'ariaLabel',
        'Provides an accessible label for assistive technologies.	',
        'null',
      ],
      ['title', 'Sets the native tooltip text shown on hover.', 'null'],
      [
        'tabIndex',
        'Controls the button’s tab order in keyboard navigation.',
        '0',
      ],
      [
        'disabled',
        'Disables the button and prevents user interaction.	',
        'false',
      ],
    ],
  },
  styTable_1: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        '--simple-button-width',
        'Defines the button width.',
        'fit-content'
      ],
      ['--simple-button-height',
        'Sets the button height.',
        'auto'
      ],
      [
        '--simple-button-radius',
        'Controls the corner roundness.',
        '1.3rem'
      ],
      [
        '--simple-button-padding',
        'Sets the inner spacing.',
        '.5rem 1rem'
      ],
      [
        '--simple-button-gap',
        'Space between icon and label.',
        '.5rem'
      ],
      [
        '--simple-button-justify-content',
        'Horizontal alignment of content.',
        'center',
      ],
      [
        '--simple-button-align-items',
        'Vertical alignment of content.',
        'center',
      ],
    ],
  },
  styTable_2: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        "--simple-button-bg",
        "Background color of the button.",
        "white (solid) / transparent (outline, minimal)"
      ],
      [
        "--simple-button-color",
        "Main color.",
        "black (solid) / inherit (outline, minimal)"
      ],
      [
        "--simple-button-border",
        "Defines the border style.",
        "none (solid, minimal) / 2px solid currentColor (outline)"
      ],
      [
        "--simple-button-focus-ring",
        "Outline shown when focused.",
        "0 0 0 2px rgba(0, 0, 0, 0.2)"
      ],
      [
        "--simple-button-transition-duration",
        "Duration of hover/focus transitions.",
        ".3s"
      ]
    ]
  },
  styTable_3: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        "--simple-button-hover-color",
        "Text color on hover.",
        "var(--simple-button-color, black)"
      ],
      [
        "--simple-button-hover-scale",
        "Scale effect applied on hover.",
        "1.05 (scaleHover)"
      ],
      [
        "--simple-button-hover-shadow",
        "Box shadow applied on hover.",
        "2px 2px 5px #525252 (shadowHover)"
      ],
      [
        "--simple-button-hover-bg",
        "Background color on hover.",
        "#949494 (toneHover)"
      ],
      [
        "--simple-button-hover-stroke",
        "Outline stroke on hover.",
        "2px solid currentColor (strokeHover)"
      ]
    ]
  },
} as const satisfies DataTableDataList;

export type SimpleButtonDocTables = typeof simpleButtonDocTables;
