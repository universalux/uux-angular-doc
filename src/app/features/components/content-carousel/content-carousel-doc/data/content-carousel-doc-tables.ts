import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { docTableHeaders } from '@app/core/data/docs.data';

export const contentCarouselDocTables = {
  ioTable_1: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "transition",
        "Enables or disables slide transition animation.",
        "true"
      ],
      [
        "advanceMode",
        "Defines how the carousel advances (single or page).",
        "'page'"
      ],
      [
        "arrowStyle",
        "Sets the arrow appearance (minimal or solid).",
        "'minimal'"
      ],
      [
        "hideArrowsOnEdges",
        "Hides navigation arrows when at the first or last slide.",
        "true"
      ],
      [
        "hideArrowsWhenNoOverflow",
        "Hides arrows if all items fit within the carousel width.",
        "true"
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
        "--carousel-accent-color",
        "Defines the main accent color for icons and focus outlines.",
        "currentColor"
      ],
      [
        "--carousel-arrows-solid-bg",
        "Background color for solid-style navigation arrows.",
        "#444444"
      ],
      [
        "--carousel-arrows-hover-bg",
        "Background color of arrows when hovered.",
        "#acacac"
      ],
      [
        "--carousel-arrows-hover-color",
        "Icon color of arrows when hovered.",
        "var(--carousel-accent-color)"
      ],
      [
        "--carousel-transition-time",
        "Duration of the carousel slide transition animation.",
        ".3s"
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

export type ContentCarouselDocTables = typeof contentCarouselDocTables;
