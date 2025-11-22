import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { componentDocTableHeaders } from '@app/core/data/component-docs.data';

export const themeToggleDocTables = {
  ioTable_1: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "isDarkSignal",
        "Provides the writable signal that controls the current theme mode.",
        "—"
      ]
    ]
  },
  ioTable_2: {
    tableHeader: componentDocTableHeaders.inputTableHeader,
    tableRows: [
      [
        "type",
        "	Defines the toggle’s visual style (solid, minimal, or outline).",
        "'minimal'"
      ],
      [
        "hover",
        "Sets the hover effect style (tone, scale, shadow, or none).",
        "'scale'"
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
    tableHeader: componentDocTableHeaders.inputTableHeader,
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
    tableHeader: componentDocTableHeaders.varTableHeader,
    tableRows: [
      [
        "--theme-toggle-size",
        "Defines the toggle width and height",
        "40px"
      ],
      [
        "--theme-toggle-bg",
        "Background color of the button",
        "Inherits light/dark mode"
      ],
      [
        "--theme-toggle-bg-light",
        "Background in light mode",
        "transparent / white (solid)"
      ],
      [
        "--theme-toggle-bg-dark",
        "Background in dark mode",
        "transparent / black (solid)"
      ],
      [
        "--theme-toggle-padding",
        "Inner spacing of the button",
        "0 / 5px (solid/outline)"
      ],
      [
        "--theme-toggle-border",
        "Border style of the button",
        "Inherits light/dark mode"
      ],
      [
        "--theme-toggle-border-light",
        "Border in light mode",
        "2px solid black"
      ],
      [
        "--theme-toggle-border-dark",
        "Border in dark mode",
        "2px solid white"
      ],
      [
        "--theme-toggle-radius",
        "Controls the corner roundness",
        "50%"
      ],
      [
        "--theme-toggle-shadow",
        "Box shadow of the button",
        "Inherits light/dark mode"
      ],
      [
        "--theme-toggle-shadow-light",
        "Shadow in light mode",
        "none"
      ],
      [
        "--theme-toggle-shadow-dark",
        "Shadow in dark mode",
        "none"
      ],
      [
        "--theme-toggle-hover-transition",
        "Transition timing for hover effects",
        ".4s ease-in-out"
      ],
      [
        "--theme-toggle-color-transition",
        "Transition timing for color and stroke changes",
        ".4s ease-in-out"
      ],
      [
        "--theme-toggle-color",
        "Main icon color and focus outline",
        "Inherits light/dark mode"
      ],
      [
        "--theme-toggle-color-light",
        "Icon color in light mode",
        "black"
      ],
      [
        "--theme-toggle-color-dark",
        "Icon color in dark mode",
        "white"
      ],
      [
        "--theme-toggle-hover-bg",
        "Background on hover",
        "Inherits light/dark mode"
      ],
      [
        "--theme-toggle-hover-bg-light",
        "Hover background in light mode",
        "#949494"
      ],
      [
        "--theme-toggle-hover-bg-dark",
        "Hover background in dark mode",
        "#949494"
      ],
      [
        "--theme-toggle-hover-scale",
        "Scale effect applied on hover",
        "1.05"
      ],
      [
        "--theme-toggle-hover-shadow-color-light",
        "Shadow color on hover in light mode",
        "rgba(0, 0, 0, 0.623)"
      ],
      [
        "--theme-toggle-hover-shadow-color-dark",
        "Shadow color on hover in dark mode",
        "rgba(255, 255, 255, 0.664)"
      ],
      [
        "--theme-toggle-rays-stroke-width",
        "Stroke width of the SVG rays",
        "50"
      ]
    ]
  },
  accTable_1: {
    tableHeader: componentDocTableHeaders.langTableHeader,
    tableRows: [
      [
        "English (default)",
        "en",
        "\"Change to light mode\" / \"Change to dark mode\""
      ],
      [
        "Spanish",
        "es",
        "\"Cambiar a modo claro\" / \"Cambiar a modo oscuro\""
      ],
      [
        "Italian",
        "it",
        "\"Passa alla modalità chiara\" / \"Passa alla modalità scura\""
      ],
      [
        "French",
        "fr",
        "\"Passer en mode clair\" / \"Passer en mode sombre\""
      ],
      [
        "German",
        "de",
        "\"Wechseln Sie zum hellen Modus\" / \"Wechseln Sie zum dunklen Modus\""
      ]
    ]
  }
} as const satisfies DataTableDataList;

export type ThemeToggleDocTables = typeof themeToggleDocTables;
