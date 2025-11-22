import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const linkButtonDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "routerLink",
        "Defines the internal navigation route.",
        "undefined"
      ],
      [
        "activatedRoute",
        "Enables ActivatedRoute context usage.",
        "true"
      ],
      [
        "queryParams",
        "Adds query parameters to the route.",
        "null"
      ],
      [
        "fragment",
        "Defines a URL fragment (anchor).",
        "undefined"
      ],
      [
        "relativeTo",
        "Sets a relative navigation based on an ActivatedRoute.",
        "null"
      ],
      [
        "queryParamsHandling",
        "Strategy for handling query params (merge / preserve).",
        "null"
      ],
      [
        "state",
        "Adds custom navigation state data.",
        "undefined"
      ]
    ]
  },
  ioTable_2: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "href",
        "Defines the external link URL.",
        "null"
      ],
      [
        "target",
        "Specifies where to open the link (_blank, _self...).",
        "'_blank'"
      ],
      [
        "rel",
        "Defines the link relation attribute for security.",
        "'noreferrer noopener'"
      ]
    ]
  },
  ioTable_3: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "type",
        "Defines the button’s visual style (solid, minimal, or outline).",
        "'solid'"
      ],
      [
        "square",
        "Makes the button shape perfectly square instead of rounded.",
        "false"
      ],
      [
        "hover",
        "Sets the hover effect style (tone, scale, stroke, shadow, or none).",
        "'tone'"
      ],
      [
        "direction",
        "Arranges the button’s inner content horizontally or vertically. (row / column).",
        "'row'"
      ]
    ]
  },
  ioTable_4: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "ariaLabel",
        "Provides an accessible label for assistive technologies.",
        "null"
      ],
      [
        "title",
        "Sets the native tooltip text shown on hover.",
        "null"
      ],
      [
        "tabIndex",
        "Controls the button’s tab order in keyboard navigation.",
        "0"
      ],
      [
        "ariaCurrent",
        "Indicates the current item in a set (e.g. current page).",
        "null"
      ],
      [
        "download",
        "Suggests that the link should be downloaded as a file.",
        "null"
      ],
      [
        "role",
        "Defines the ARIA role (link or button).",
        "null"
      ],
      [
        "disabled",
        "Disables the button and prevents user interaction.",
        "false"
      ]
    ]
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
        "--link-button-hover-color",
        "Text color on hover.",
        "var(--link-button-color, black)"
      ],
      [
        "--link-button-hover-scale",
        "Scale effect applied on hover.",
        "1.05 (scaleHover)"
      ],
      [
        "--link-button-hover-shadow",
        "Box shadow applied on hover.",
        "2px 2px 5px #525252 (shadowHover)"
      ],
      [
        "--link-button-hover-bg",
        "Background color on hover.",
        "#949494 (toneHover)"
      ],
      [
        "--link-button-hover-stroke",
        "Outline stroke on hover.",
        "2px solid currentColor (strokeHover)"
      ],
      [
        "--link-button-active-color",
        "Text color when active.",
        "var(--link-button-color, black)"
      ],
      [
        "--link-button-active-scale",
        "Scale effect when active.",
        "1.05 (scaleHover)"
      ],
      [
        "--link-button-active-shadow",
        "Box shadow when active.",
        "2px 2px 5px #525252 (shadowHover)"
      ],
      [
        "--link-button-active-bg",
        "Background color when active.",
        "#949494 (toneHover)"
      ],
      [
        "--link-button-active-stroke",
        "Outline stroke when active.",
        "2px solid currentColor (strokeHover)"
      ]
    ]
  },
} as const satisfies DataTableDataList;

export type LinkButtonDocTables = typeof linkButtonDocTables;
