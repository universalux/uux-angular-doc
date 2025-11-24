import{a as y}from"./chunk-NP7TIR3N.js";import{e as r,h}from"./chunk-RHLAEQF4.js";import{e as p}from"./chunk-5JG6NEMX.js";import{Ab as g,Bb as b,Cb as C,Ha as n,Ia as o,Ja as t,Ka as i,Q as c,ba as d,cb as e,la as l,sa as m}from"./chunk-VWLHZTRG.js";var f={installationCode_1:{language:"bash",code:"npm install ng-hero-carousel"},installationCode_2:{language:"bash",code:"npm install ng-hero-carousel@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-hero-carousel@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { NgHeroCarousel, HeroCarouselItem } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel],
        template: \`
          <ng-hero-carousel
            [slides]="slidesObject()"
          />
        \`
      })
      class App {
        slidesObject = signal<HeroCarouselItem[]>([
        {
          image_url: 'img1.jpg',
          title: 'First Slide',
          subtitle: '1st slide subtitle'
        },
        {
          image_url: 'img2.jpg',
          title: 'Second Slide',
          subtitle: '2nd slide subtitle'
        }
        ]);
      }`},funcCode_1:{language:"html",code:`
      import { HeroCarouselItem } from 'ng-hero-carousel';
    `},funcCode_2:{language:"ts",code:`
      export interface HeroCarouselItem {
        image_url?: string;
        backgroundColor?: string;
        title?: string;
        subtitle?: string;
      };
    `},funcCode_3:{language:"ts",code:`
      import { NgHeroCarousel, CarouselItem, SlideForDirective } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel, SlideForDirective],
        template: \`
          <ng-hero-carousel
            [slides]="items()"
          >
            <ng-template [slideFor]="0">
              <button>
                  Button in first slide
              </button>
            </ng-template>

          </ng-hero-carousel>
        \`
      })
      class App {
        items = signal<CarouselItem[]>([
          { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
          { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
        ]);
      }
    `},funcCode_4:{language:"ts",code:`
      import { NgHeroCarousel, CarouselItem } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel],
        template: \`
          <ng-hero-carousel
            [slides]="items()"
          >
            <ng-template #outerContent>
              <button style="position: absolute; top: 1rem; right: 1.5rem;">
                  X
              </button>
            </ng-template>
          </ng-hero-carousel>
        \`
      })
      class App {
        items = signal<CarouselItem[]>([
        { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
        { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
        ]);
      }
    `},ioCode_1:{language:"html",code:`
      <ng-hero-carousel
        [slides]="items()"

        [hasOverlay]="true"
        [transitionTime]="800"
        arrowsPlacement="auto"
        [hasCounter]="true"
        indicators="bars"

        [hasAutoplay]="true"
        [autoplayTime]="4000"
        [autoplayResumeTime]="15000"

        (selected)="selectedItem.set($event)"

        lang="en"
        accessibilityOptions="accOps()"
      >
    `},stylingCode_1:{language:"css",code:`
      ng-hero-carousel{
        --carousel-bg: red;
        --carousel-overlay-opacity: 0.8;
        --carousel-accent-color: red;
      }
    `},accCode_1:{language:"ts",code:`
      import { HeroCarouselLangs, HeroCarouselCustomAria } from 'ng-hero-carousel';
    `},accCode_2:{language:"html",code:`
      <ng-hero-carousel lang="es" />
    `},accCode_3:{language:"ts",code:`
      export interface HeroCarouselCustomAria {
        hostAriaLabel?: string;
        autoplayPauseLabel?: string;
        autoplayPlayLabel?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        slidesRegionAriaLabel?: string;
        slidesRegionRoleDescription?: string;
        slideAriaLabel?: (currentSlide: number, total: number) => string;
        slideRoleDescription?: string;
      };
    `},accCode_4:{language:"ts",code:`
      import { NgHeroCarousel, HeroCarouselItem, HeroCarouselCustomAria } from 'ng-hero-carousel';

      @Component({
        imports: [NgHeroCarousel],
        template: \`
          <ng-hero-carousel
            [slides]="items()"
            [customAria]="accOpts()"
          />
        \`
      })
      class App {
        items = signal<HeroCarouselItem[]>([
        { image_url: 'img1.jpg', title: 'First Slide', subtitle: '1st slide subtitle' },
        { image_url: 'img2.jpg', title: 'Second Slide', subtitle: '2nd slide subtitle' },
        ]);
        accOpts = signal<HeroCarouselCustomAria>({
          hostAriaLabel: 'Main carousel CHANGED',
          autoplayPauseLabel: 'Pause carousel autoplay CHANGED',
          autoplayPlayLabel: 'Resume carousel autoplay CHANGED',
          prevBtnAriaLabel: 'Go to previous slide CHANGED',
          nextBtnAriaLabel: 'Go to next slide CHANGED',
          slidesRegionAriaLabel: 'Wide carousel CHANGED',
          slidesRegionRoleDescription: 'Carousel CHANGED',
          slideAriaLabel: (currentSlide: number, total: number) =>
              'CHANGED - Slide ' + currentSlide + 'of ' + total
          slideRoleDescription: 'CHANGED - slide',
        });
      }
    `}};var v={funcTable_1:{tableHeader:r.objTableHeader,tableRows:[["image_url","Image URL for the slide","string","No"],["backgroundColor","	Background color or gradient for the slide, if needed","string","No"],["title","	Responsive title for the slide (<h2>)","string","No"],["subtitle","	Responsive subtitle for the slide (<h3>)","string","No"]]},ioTable_1:{tableHeader:r.inputTableHeader,tableRows:[["[hasOverlay]","Add an overlay on top of the background image.","true"],["[transitionTime]","Time in ms of the transition between slides","800"],["arrowsPlacement","Position of arrows (Auto: up for desktop, down for mobile)","'auto'"],["[hasCounter]","Add a counter (Ex: 1/5).","false"],["indicators","Select the type of indicator for the slides","'bars'"]]},ioTable_2:{tableHeader:r.inputTableHeader,tableRows:[["[hasAutoplay]","Select whether you want autoplay or not","true"],["[autoplayTime]","Time in ms in which the slide is automatically changed","7000"],["[autoplayResumeTime]","Time in ms to resume autoplay when it stops (e.g. clicking on a slide)","15000"]]},ioTable_3:{tableHeader:r.inputTableHeader,tableRows:[["lang","Select the language for accessibility","'en'"],["customAria","Set up your own custom aria attributes (more info below)","null"]]},styTable_1:{tableHeader:r.varTableHeader,tableRows:[["--carousel-width","Component width","100%"],["--carousel-height","Component height","100dvh"],["--carousel-bg","General background. Inherits from parent by default","inherit"],["--carousel-overlay-color","[hasOverlay] Custom color for the overlay","black"],["--carousel-overlay-opacity","Custom opacity for the overlay",".5"],["--carousel-title-size","Font size for slide titles","1.8rem"],["--carousel-subtitle-size","Font size for slide subtitles","1.2rem"],["--carousel-transition-translate-y","TranslateY for slide content entrance/exit","-2rem"],["--carousel-text-color","Text color for titles and subtitles","inherit"],["--carousel-accent-color","Base accent color for arrows, indicators, autoplay button","currentColor"],["--carousel-autoplay-color","Custom color for the autoplay toggle button","var(--carousel-accent-color)"],["--carousel-arrow-color","Custom color for arrow buttons","var(--carousel-accent-color)"],["--carousel-indicator-color","Custom color for slide indicators","var(--carousel-accent-color)"],["--carousel-autoplay-top","Top position for the autoplay toggle button","0rem"],["--carousel-autoplay-left","Left position for the autoplay toggle button","0rem"],["--carousel-counter-top","Top position for the counter if enabled","0rem"],["--carousel-counter-right","Right position for the counter if enabled","0rem"]]},accTable_1:{tableHeader:r.propsTableHeader,tableRows:[["hostAriaLabel","aria-label for the host component. Useful to indicate the user that has entered into a carousel"],["autoplayPauseLabel","aria-label for autoplay button when autoplay is playing (described action is to pause it)"],["autoplayPlayLabel","aria-label for autoplay button when autoplay is paused (described action is to resume it)"],["prevBtnAriaLabel","aria-label for the arrow button that goes to prev slide"],["nextBtnAriaLabel","aria-label for the arrow button that goes to next slide"],["slidesRegionAriaLabel","aria-label for the container of all slides"],["slidesRegionRoleDescription","aria-roledescription for the container of all slides (role is 'group')"],["slideAriaLabel","aria-label for each slide. Is a function that returns the text for each slide (see example below)"],["slideRoleDescription","aria-roledescription for individual slide (role is 'group')"]]}};var S=class u{docCode=d(f);docTables=d(v);metaTagsService=c(g);ngOnInit(){this.metaTagsService.setMetaTags({title:"Hero Carousel \u2022 UUX Angular",description:"UUX Hero Carousel component documentation",image:"/assets/images/thumbnails/hero-carousel_thumbnail_1200px.webp",url:"/components/hero-carousel/documentation",type:"article"})}static \u0275fac=function(s){return new(s||u)};static \u0275cmp=m({type:u,selectors:[["app-hero-carousel-doc"]],decls:175,vars:34,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],[3,"tableData"],[1,"note"],["sectionCode","io"],["sectionCode","sty"],["sectionCode","acc"],["routerLink",".","fragment","hero-carousel-io"]],template:function(s,a){s&1&&(i(0,"doc-section-title",0),o(1,"p")(2,"em"),e(3,"ng-hero-carousel"),t(),e(4," is a "),o(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),o(8,"p"),e(9," It is designed to work with "),o(10,"em"),e(11,"signals"),t(),e(12," and Angular "),o(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible her section carousel. It is also fully compatible with "),o(16,"em"),e(17,"SSR"),t(),e(18,", "),o(19,"em"),e(20,"CSR"),t(),e(21," and "),o(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),i(25,"app-divider")(26,"doc-section-title",1),o(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),i(29,"app-code-block",2),o(30,"p"),e(31,"Angular 19:"),t(),i(32,"app-code-block",2),o(33,"p"),e(34,"Angular 18:"),t(),i(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),o(38,"p"),e(39,"Using "),o(40,"em"),e(41,"ng-hero-carousel"),t(),e(42," is easy:"),t(),o(43,"ul")(44,"li"),e(45,"The only required input for ng-hero-carousel is "),o(46,"em"),e(47,"[slides]"),t(),e(48," where you can add backgrounds and some predefined content for each slide."),t(),o(49,"li"),e(50,"Configure its style, behavior, and accessibility using inputs.."),t(),o(51,"li"),e(52,"Style it with customizable CSS variables to match your design needs."),t()(),o(53,"p"),e(54,"Here\u2019s a basic usage example:"),t(),i(55,"app-code-block",2)(56,"app-divider")(57,"doc-section-title",4),o(58,"p"),e(59,"slides must be an array of objects with the type "),o(60,"em"),e(61,"HeroCarouselItem[]"),t(),e(62,". You can import this type directly from the library:"),t(),i(63,"app-code-block",2),o(64,"h3"),e(65,"NgHeroCarousel Interface"),t(),o(66,"p"),e(67,"Here is the exact declaration of the CarouselItem type:"),t(),i(68,"app-code-block",2)(69,"app-data-table",5),o(70,"div",6)(71,"p"),e(72,"\u{1F4A1} It\xB4s important to know that you don\xB4t have to add all elements. If you want, for exaple, only background and a title in one slide, you can set just image_url and title."),t()(),o(73,"h3"),e(74,"Adding custom content: slide for"),t(),o(75,"p"),e(76,"You can add the custom content you want into any slide you decide. For doing that you must use "),o(77,"em"),e(78,"ng-template"),t(),e(79," and the "),o(80,"em"),e(81,"SlideForDirective"),t(),e(82,"."),t(),o(83,"p"),e(84,"Here you have a simple example to add a button in the first slide:"),t(),i(85,"app-code-block",2),o(86,"p"),e(87,"As you can see in the example above, to add content to a slide you just need to use ng-template and the [slideFor] directive, which receives the number of slide you want to add custom content."),t(),o(88,"h3"),e(89,"Adding custom content: outerContent"),t(),o(90,"p"),e(91,'You can also add content that remains visible across all slides. It will be visible even if you navigate through slides. Example of use: imagine that the carousel is opened into a modal window. You can easily add a "close button" this way.'),t(),i(92,"app-code-block",2),o(93,"p"),e(94,` As you can see in the example above, you just have to add <ng-template #outerContent> and use the template reference #outerContent. IMPORTANT: You must set the content inside <ng-template #outerContent> and place it where you want.
`),t(),i(95,"app-divider")(96,"doc-section-title",7),o(97,"p"),e(98,"There are several inputs/outputs that allow you to customize ng-hero-carousel component."),t(),o(99,"p"),e(100,"Here is an example:"),t(),i(101,"app-code-block",2),o(102,"h3"),e(103,"Style & Behavior Inputs"),t(),i(104,"app-data-table",5),o(105,"h3"),e(106,"Autoplay inputs"),t(),i(107,"app-data-table",5),o(108,"h3"),e(109,"Current/selected slide output"),t(),o(110,"p"),e(111,"You can use "),o(112,"em"),e(113,"(selected)"),t(),e(114," output to get the current slide on screen. For example, if you want to build your own counter."),t(),o(115,"h3"),e(116,"Accessibility Inputs"),t(),i(117,"app-data-table",5)(118,"app-divider")(119,"doc-section-title",8),o(120,"p"),e(121,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),t(),i(122,"app-code-block",2)(123,"app-data-table",5)(124,"app-divider")(125,"doc-section-title",9),o(126,"p"),e(127,"There are two ways of setting the aria-label attributes: by "),o(128,"em"),e(129,"lang"),t(),e(130," attribute or by "),o(131,"em"),e(132,"customAria"),t(),e(133," attribute (See "),o(134,"a",10),e(135,"Accessibility Inputs"),t(),e(136," at Inputs and Outputs section)"),t(),o(137,"p"),e(138,"If needed, you can import HeroCarouselLangs and HeroCarouselCustomAria types like this:"),t(),i(139,"app-code-block",2),o(140,"h3"),e(141,"'lang' attribute:"),t(),o(142,"p"),e(143,"The component includes "),o(144,"em"),e(145,"five predefined languages"),t(),e(146," for accessibility labels that you can set easily with the lang attribute:"),t(),o(147,"p"),e(148,"Laguages can be: english (en), spanish (es), italian (it), french (fr) or deutch (de) "),t(),o(149,"p"),e(150,"*** We recommend using the lang attribute if you don't need any other languages than the ones provided by default. It's simple and compliant with WAI-ARIA standards. ***"),t(),i(151,"app-code-block",2),o(152,"div",6)(153,"p"),e(154,"\u{1F4A1} If no value is provided in lang, the default language is English (en)."),t(),o(155,"p"),e(156,"\u{1F4A1} If your application supports multiple languages, you can bind the lang attribute to a signal and link it with a select, for example."),t()(),o(157,"h3"),e(158,"'customAria' attribute:"),t(),o(159,"p"),e(160,"In addition to the predefined languages available through the lang attribute, you can fully customize the ARIA labels for your menu button by using the customAria input."),t(),o(161,"p"),e(162,"This option gives you full control over the text announced by screen readers when the menu is opened or closed \u2014 perfect for custom translations, accessibility improvements, or when you want to use a language that is not included in the predefined set."),t(),e(163," Here is the exact declaration of the HeroCarouselCustomAria type: "),i(164,"app-code-block",2),e(165," Here you can see a description of every field in HeroCarouselCustomAria interface. Every field is type string (except slideAriaLabel) and non-required: "),i(166,"app-data-table",5),o(167,"p"),e(168,"Example of usage:"),t(),i(169,"app-code-block",2),o(170,"div",6)(171,"p"),e(172,"\u{1F4A1} Remember that what is indicated in the customAria attribute replaces the default language set in lang."),t(),o(173,"p"),e(174,"\u{1F4A1} If you only set one of the properties, the other will use the label from the current lang."),t()()),s&2&&(l(29),n("language",a.docCode().installationCode_1.language)("code",a.docCode().installationCode_1.code),l(3),n("language",a.docCode().installationCode_2.language)("code",a.docCode().installationCode_2.code),l(3),n("language",a.docCode().installationCode_3.language)("code",a.docCode().installationCode_3.code),l(20),n("language",a.docCode().overviewCode_1.language)("code",a.docCode().overviewCode_1.code),l(8),n("language",a.docCode().funcCode_1.language)("code",a.docCode().funcCode_1.code),l(5),n("language",a.docCode().funcCode_2.language)("code",a.docCode().funcCode_2.code),l(),n("tableData",a.docTables().funcTable_1),l(16),n("language",a.docCode().funcCode_3.language)("code",a.docCode().funcCode_3.code),l(7),n("language",a.docCode().funcCode_4.language)("code",a.docCode().funcCode_4.code),l(9),n("language",a.docCode().ioCode_1.language)("code",a.docCode().ioCode_1.code),l(3),n("tableData",a.docTables().ioTable_1),l(3),n("tableData",a.docTables().ioTable_2),l(10),n("tableData",a.docTables().ioTable_3),l(5),n("language",a.docCode().stylingCode_1.language)("code",a.docCode().stylingCode_1.code),l(),n("tableData",a.docTables().styTable_1),l(16),n("language",a.docCode().accCode_1.language)("code",a.docCode().accCode_1.code),l(12),n("language",a.docCode().accCode_2.language)("code",a.docCode().accCode_2.code),l(13),n("language",a.docCode().accCode_3.language)("code",a.docCode().accCode_3.code),l(2),n("tableData",a.docTables().accTable_1),l(3),n("language",a.docCode().accCode_4.language)("code",a.docCode().accCode_4.code))},dependencies:[h,C,y,b,p],encapsulation:2,changeDetection:0})};export{S as HeroCarouselDoc};
