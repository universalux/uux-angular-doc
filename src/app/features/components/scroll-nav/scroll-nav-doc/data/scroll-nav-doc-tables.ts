import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { docTableHeaders } from '@app/core/data/docs.data';

export const scrollNavDocTables = {
  ioTable_1: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "scrollStep",
        "Pixels that the scroll moves when you press an arrow",
        "150"
      ],
      [
        "scrollBehavior",
        "Scroll behavior (auto or smooth).",
        "'smooth'"
      ]
    ]
  },
  ioTable_2: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "lang",
        "Select the language for accessibility",
        "'en'"
      ],
      [
        "customAria",
        "Set up your own custom aria attributes (more info below)",
        "null"
      ]
    ]
  },
  styTable_1: {
    tableHeader: docTableHeaders.varTableHeader,
    tableRows: [
      [
        "--scroll-nav-bg",
        "Background color of the scrollable navigation (host and arrow icons).",
        "inherit"
      ],
      [
        "--scroll-nav-color",
        "Main text and icon color of the scrollable navigation.",
        "host: inherit / arrows: currentColor"
      ],
      [
        "--scroll-nav-arrow-size",
        "Width and height of the navigation arrow icons.",
        "1.4rem"
      ],
      [
        "--scroll-nav-justify-content",
        "Defines the justify-content alignment for the scrollable container.",
        "start"
      ],
      [
        "--scroll-nav-gap",
        "Spacing (gap) between items inside the scrollable content area.",
        "0"
      ]
    ]
  },
  accTable_1: {
    tableHeader: docTableHeaders.propsTableHeader,
    tableRows: [
      [
        "globalAriaLabel",
        "aria-label for the global container. Useful to indicate that the user has entered a carousel component.",
      ],
      [
        "globalRoleDescription",
        "Describes the role of the carousel region (e.g., “carousel” or “image gallery”) to assistive technologies.",
      ],
      [
        "prevBtnAriaLabel",
        "Label for the “previous” navigation button. Communicates its purpose to screen readers.",
      ],
      [
        "nextBtnAriaLabel",
        "Label for the “next” navigation button. Communicates its purpose to screen readers.",
      ],
      [
        "trackRoleDescription",
        "Describes the carousel track region that contains the sliding items (e.g., “list of items”).",
      ],
      [
        "trackAriaLabel",
        "Label for the carousel track. Can be used to describe what the list contains (e.g., “featured products”).",
      ],
      [
        "rangeMessage",
        "Function that returns a message indicating the current visible item range in relation to the total (e.g., “Showing items 1–3 of 10”). Useful for providing dynamic feedback to screen readers.",
      ]
    ]
  }

} as const satisfies DataTableDataList;

export type ScrollNavDocTables = typeof scrollNavDocTables;
