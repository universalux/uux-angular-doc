import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { docTableHeaders } from '@app/core/data/docs.data';

export const contentCardDocTables = {
  funcTable_1: {
    tableHeader: docTableHeaders.slotsTableHeader,
    tableRows: [
      [
        "card-header",
        "Content to show in the header"
      ],
      [
        "card-image",
        "Main image section"
      ],
      [
        "card-body",
        "Main body content"
      ],
      [
        "card-footer",
        "Footer content"
      ],
      [
        "absolute-content",
        "Extra content with position absolute"
      ]
    ]
  },
  ioTable_1: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "animation",
        "Entrance animation effect: 'translateY', 'fadeIn', 'none'",
        "'translateY'"
      ],
      [
        "hover",
        "Hover effect: 'scale', 'color', 'both', 'none'",
        "'scale'"
      ],
      [
        "shadow",
        "Enable/disable card shadow",
        "true"
      ]
    ]
  },
  styTable_1: {
    tableHeader: docTableHeaders.varTableHeader,
    tableRows: [
      [
        "--card-bg",
        "Background color of the entire card",
        "white",
        "General"
      ],
      [
        "--card-fg",
        "Foreground (text) color of the card",
        "black",
        "General"
      ],
      [
        "--card-section-padding",
        "Internal padding for each section (header, body, footer)",
        "16px",
        "General"
      ],
      [
        "--card-image-padding-x",
        "Horizontal padding for the image container",
        "0px",
        "General"
      ],
      [
        "--card-footer-border-top",
        "Top border of the footer section",
        "0px solid currentColor",
        "General"
      ],
      [
        "--card-hover-velocity",
        "Transition duration applied on hover",
        ".3s",
        "Hover"
      ],
      [
        "--card-hover-scale",
        "Scale factor when hovering (if hover='scale')",
        "1.03",
        "Hover"
      ],
      [
        "--card-hover-bg",
        "Background color on hover (if hover='color' or 'both')",
        "color-mix(in srgb, var(--card-bg) 70%, #999999 30%)",
        "Hover"
      ],
      [
        "--card-hover-fg",
        "Foreground/text color on hover (if hover='color' or 'both')",
        "var(--card-fg)",
        "Hover"
      ],
      [
        "--card-animation-delay",
        "Delay before the entrance animation starts",
        "0s",
        "Animation"
      ],
      [
        "--card-animation-velocity",
        "Duration of the entrance animation",
        "1s",
        "Animation"
      ],
      [
        "--card-shadow",
        "Box-shadow applied when shadow=true",
        "3px 3px 20px color-mix(in srgb, var(--card-fg) 60%, #999999 40%)",
        "Shadow"
      ],
      [
        "--card-header-bg",
        "Background color of the header section",
        "transparent",
        "Sections"
      ],
      [
        "--card-image-bg",
        "Background color of the image section",
        "transparent",
        "Sections"
      ],
      [
        "--card-body-bg",
        "Background color of the body section",
        "transparent",
        "Sections"
      ],
      [
        "--card-footer-bg",
        "Background color of the footer section",
        "transparent",
        "Sections"
      ],
      [
        "--card-header-text-color",
        "Text color inside the header section",
        "inherit",
        "Sections"
      ],
      [
        "--card-body-text-color",
        "Text color inside the body section",
        "inherit",
        "Sections"
      ],
      [
        "--card-footer-text-color",
        "Text color inside the footer section",
        "inherit",
        "Sections"
      ]
    ]
  }
} as const satisfies DataTableDataList;

export type ContentCardDocTables = typeof contentCardDocTables;
