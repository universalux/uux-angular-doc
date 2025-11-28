import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const ratingsDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "items",
        "Number of icons displayed in the rating. Also defines the valid range for the average value.",
        "5"
      ],
      [
        "average",
        "Initial average value to display, rendered according to the selected number of items.",
        "0"
      ],
      [
        "readOnly",
        "If true, the component shows only the average; if false, the user can vote.",
        "false"
      ],
    ]
  },
  ioTable_2: {
    tableHeader: componentDocTableHeaders.outputTableHeader,
    tableRows: [
      [
        "vote",
        "Emits the selected rating value when the user votes (only if not in readOnly mode).",
        "—"
      ],
    ]
  },
  ioTable_3: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "icon",
        "Icon style used for each item in the rating (star or heart).",
        "'star'"
      ],
      [
        "hover",
        "Hover animation applied on each item. Accepts one or several effects, or 'none' to disable it.",
        "['scale']"
      ],
    ]
  },
  ioTable_4: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "lang",
        "Defines the language for built-in ARIA labels (en, es, fr, etc.).",
        "'en'"
      ],
      [
        "customAria",
        "Provides custom ARIA labels to override default accessibility text.",
        "null"
      ]
    ]
  },
  styTable_1: {
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        "--rating-shadow",
        "Drop-shadow applied to the rating container.",
        "2px 2px 5px rgba(0,0,0,.548)"
      ],
      [
        "--rating-hover-transition-duration",
        "Duration of the hover animation on icons.",
        ".3s"
      ],
      [
        "--rating-focus-ring",
        "Outline style applied when an item receives focus.",
        "2px solid var(--rating-stroke-color, white)"
      ],
      [
        "--rating-item-x-padding",
        "Horizontal spacing between each icon.",
        ".3rem"
      ],
      [
        "--rating-filled-color",
        "Fill color used for the filled portion of icons.",
        "gold (stars), red (hearts)"
      ],
      [
        "--rating-stroke-color",
        "Stroke color applied to icon outlines.",
        "white"
      ],
      [
        "--rating-stroke-width",
        "Width of the icon stroke.",
        ".7"
      ],
      [
        "--rating-empty-color",
        "Color for the unfilled portion of icons.",
        "transparent"
      ],
    ]
  },
  accTable_1: {
    tableHeader: componentDocTableHeaders.propsTableHeader,
    tableRows: [
      [
        "containerReadOnlyAriaLabel",
        "aria-label for the rating container when the component is in read-only mode.",
      ],
      [
        "containerInteractiveAriaLabel",
        "aria-label for the rating container when interaction (voting) is allowed.",
      ],
      [
        "buttonInteractiveAriaLabel",
        "Function that returns the aria-label for each interactive rating button (receives value and total).",
      ],
    ]
  }
} as const satisfies DataTableDataList;

export type RatingsDocTables = typeof ratingsDocTables;
