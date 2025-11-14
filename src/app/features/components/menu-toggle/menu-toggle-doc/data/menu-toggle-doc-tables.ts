import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { docTableHeaders } from '@app/core/data/docs.data';

export const menuToggleDocTables = {
  ioTable_1: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "isOpenSignal",
        "Provides the writable signal that controls the open/close state.",
        "—"
      ]
    ]
  },
  ioTable_2: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "type",
        "Defines the toggle’s visual style (dots, bars, or uneven).",
        "'bars'"
      ],
      [
        "invert",
        "Inverts the toggle colors when set to true.",
        "false"
      ],
      [
        "thin",
        "Makes the toggle lines thinner.",
        "false"
      ],
      [
        "rounded",
        "Applies rounded corners to the toggle lines.",
        "false"
      ],
      [
        "animation",
        "Determines the toggle animation (rotateX, rotateY, or soft).",
        "'soft'"
      ],
      [
        "faster",
        "Speeds up the toggle animation when set to true.",
        "false"
      ]
    ]

  },
  ioTable_3: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "tabIndex",
        "Controls the toggle’s tab order in keyboard navigation.",
        "0"
      ],
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
    tableHeader: docTableHeaders.varTableHeader,
    tableRows: [
      [
        "--menu-toggle-size",
        "Defines the toggle width and height",
        "40px"
      ],
      [
        "--menu-toggle-color",
        "Sets the main color for bars and focus outline",
        "black"
      ]
    ]
  },
  accTable_1: {
    tableHeader: docTableHeaders.langTableHeader,
    tableRows: [
      [
        "English (default)",
        "en",
        "\"Open menu\" / \"Close menu\""
      ],
      [
        "Spanish",
        "es",
        "\"Abrir menú\" / \"Cerrar menú\""
      ],
      [
        "Italian",
        "it",
        "\"Apri menu\" / \"Chiudi menu\""
      ],
      [
        "French",
        "fr",
        "\"Ouvrir le menu\" / \"Fermer le menu\""
      ],
      [
        "German",
        "de",
        "\"Menü öffnen\" / \"Menü schließen\""
      ]
    ]
  }
} as const satisfies DataTableDataList;

export type MenuToggleDocTables = typeof menuToggleDocTables;
