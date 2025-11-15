import { DataTableDataList } from '@app/shared/ui/data-table/data-table.types';
import { docTableHeaders } from '@app/core/data/docs.data';

export const heroCarouselDocTables = {
  funcTable_1: {
    tableHeader: docTableHeaders.objTableHeader,
    tableRows: [
      ['image_url', 'Image URL for the slide', 'string', 'No'],
      ['backgroundColor', '	Background color or gradient for the slide, if needed', 'string', 'No'],
      ['title', '	Responsive title for the slide (<h2>)', 'string', 'No'],
      ['subtitle', '	Responsive subtitle for the slide (<h3>)', 'string', 'No']
    ],
  },
  ioTable_1: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "[hasOverlay]",
        "Add an overlay on top of the background image.",
        "true"
      ],
      [
        "[transitionTime]",
        "Time in ms of the transition between slides",
        "800"
      ],
      [
        "arrowsPlacement",
        "Position of arrows (Auto: up for desktop, down for mobile)",
        "'auto'"
      ],
      [
        "[hasCounter]",
        "Add a counter (Ex: 1/5).",
        "false"
      ],
      [
        "indicators",
        "Select the type of indicator for the slides",
        "'bars'"
      ]
    ]
  },
  ioTable_2: {
    tableHeader: docTableHeaders.inputTableHeader,
    tableRows: [
      [
        "[hasAutoplay]",
        "Select whether you want autoplay or not",
        "true"
      ],
      [
        "[autoplayTime]",
        "Time in ms in which the slide is automatically changed",
        "7000"
      ],
      [
        "[autoplayResumeTime]",
        "Time in ms to resume autoplay when it stops (e.g. clicking on a slide)",
        "15000"
      ]
    ]
  },
  ioTable_3: {
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
        "--carousel-width",
        "Component width",
        "100%"
      ],
      [
        "--carousel-height",
        "Component height",
        "100dvh"
      ],
      [
        "--carousel-bg",
        "General background. Inherits from parent by default",
        "inherit"
      ],
      [
        "--carousel-overlay-color",
        "[hasOverlay] Custom color for the overlay",
        "black"
      ],
      [
        "--carousel-overlay-opacity",
        "Custom opacity for the overlay",
        ".5"
      ],
      [
        "--carousel-title-size",
        "Font size for slide titles",
        "1.8rem"
      ],
      [
        "--carousel-subtitle-size",
        "Font size for slide subtitles",
        "1.2rem"
      ],
      [
        "--carousel-transition-translate-y",
        "TranslateY for slide content entrance/exit",
        "-2rem"
      ],
      [
        "--carousel-text-color",
        "Text color for titles and subtitles",
        "inherit"
      ],
      [
        "--carousel-accent-color",
        "Base accent color for arrows, indicators, autoplay button",
        "currentColor"
      ],
      [
        "--carousel-autoplay-color",
        "Custom color for the autoplay toggle button",
        "var(--carousel-accent-color)"
      ],
      [
        "--carousel-arrow-color",
        "Custom color for arrow buttons",
        "var(--carousel-accent-color)"
      ],
      [
        "--carousel-indicator-color",
        "Custom color for slide indicators",
        "var(--carousel-accent-color)"
      ],
      [
        "--carousel-autoplay-top",
        "Top position for the autoplay toggle button",
        "0rem"
      ],
      [
        "--carousel-autoplay-left",
        "Left position for the autoplay toggle button",
        "0rem"
      ],
      [
        "--carousel-counter-top",
        "Top position for the counter if enabled",
        "0rem"
      ],
      [
        "--carousel-counter-right",
        "Right position for the counter if enabled",
        "0rem"
      ]
    ]
  },
  accTable_1: {
    tableHeader: docTableHeaders.propsTableHeader,
    tableRows: [
      [
        "hostAriaLabel",
        "aria-label for the host component. Useful to indicate the user that has entered into a carousel",
      ],
      [
        "autoplayPauseLabel",
        "aria-label for autoplay button when autoplay is playing (described action is to pause it)",
      ],
      [
        "autoplayPlayLabel",
        "aria-label for autoplay button when autoplay is paused (described action is to resume it)",
      ],
      [
        "prevBtnAriaLabel",
        "aria-label for the arrow button that goes to prev slide",
      ],
      [
        "nextBtnAriaLabel",
        "aria-label for the arrow button that goes to next slide",
      ],
      [
        "slidesRegionAriaLabel",
        "aria-label for the container of all slides",
      ],
      [
        "slidesRegionRoleDescription",
        "aria-roledescription for the container of all slides (role is 'group')",
      ],
      [
        "slideAriaLabel",
        "aria-label for each slide. Is a function that returns the text for each slide (see example below)",
      ],
      [
        "slideRoleDescription",
        "aria-roledescription for individual slide (role is 'group')",
      ]
    ]
  }

} as const satisfies DataTableDataList;

export type HeroCarouselDocTables = typeof heroCarouselDocTables;
