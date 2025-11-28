import{a as f}from"./chunk-NI6Y3Y6G.js";import{e as r,h as b}from"./chunk-FIO25GLS.js";import{e as p}from"./chunk-WYHA5YSP.js";import{Bb as g,Cb as C,Db as h,Ha as l,Ia as o,Ja as t,Ka as a,Q as u,ba as c,cb as e,la as i,sa as m}from"./chunk-DJ42HLST.js";var v={installationCode_1:{language:"bash",code:"npm install ng-content-carousel"},installationCode_2:{language:"bash",code:"npm install ng-content-carousel@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-content-carousel@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { NgContentCarousel, ContentCarouselItemDirective } from 'ng-content-carousel';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgContentCarousel, ContentCarouselItemDirective],
        template: \`
          <ng-content-carousel>
            <div contentCarouselItem >
              Here goes the item content you want
            </div>
            <div contentCarouselItem >
              Here goes the item content you want
            </div>
          </ng-content-carousel>
        \`,
      })`},stylingCode_1:{language:"css",code:`
      ng-content-carousel{
        margin: 1rem; //Example of property you can change directly for the whole component
        --carousel-accent-color: green;
        --carousel-arrows-solid-bg: red;
        --carousel-arrows-hover-bg: #a538a5;
        --carousel-arrows-hover-color: #ffffff;
        --carousel-transition-time: 1s;
      }
    `},stylingCode_2:{language:"css",code:`
      :host ::ng-deep .carousel-item:focus-visible{
        outline: 2px solid var(--carousel-accent-color);
        outline-offset: -2px;
        border-radius: 4px;
      }

      :host ::ng-deep .carousel-item{
        padding: 1rem;
      }
    `},stylingCode_3:{language:"css",code:`
      ng-content-carousel .carousel-item{
        background-color: blue;
      }
    `},stylingCode_4:{language:"html",code:`
      <ng-content-carousel [accessibilityOptions]="accOpts()">
        <div carouselItem> // Use this as a item container => predefine position, padding...
          <div class=""> // Use another container for the content itself
            <span>Top content</span>
            <span>Middle content</span>
            <span>Bottom content</span>
          </div>
        </div>
      </ng-content-carousel>
    `},accCode_1:{language:"ts",code:`
      import { ContentCarouselLangs, ContentCarouselCustomAria } from 'ng-content-carousel';
    `},accCode_2:{language:"html",code:`
      <ng-content-carousel lang="es" />
    `},accCode_3:{language:"ts",code:`
      export interface ContentCarouselCustomAria {
        globalAriaLabel?: string;
        globalRoleDescription?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        trackRoleDescription?: string;
        trackAriaLabel?: string;
        rangeMessage?: (first: number, last: number, total: number) => string;
      };
    `},accCode_4:{language:"ts",code:`
    import { NgContentCarousel, ContentCarouselItemDirective, ContentCarouselCustomAria } from 'ng-content-carousel';

      @Component({
        imports: [NgContentCarousel, ContentCarouselItemDirective],
        template: \`
          <ng-content-carousel [customAria]="accOpts()">
            <div contentCarouselItem>
              Here goes the item content you want
            </div>
            <div contentCarouselItem>
              Here goes the item content you want
            </div>
          </ng-content-carousel>
        \`
      })
      class App {
        accOpts : ContentCarouselCustomAria = {
          globalAriaLabel: 'EDIT Content carousel',
          globalRoleDescription: 'EDIT Carousel of content',
          prevBtnAriaLabel: 'EDIT Go to previous item',
          nextBtnAriaLabel: 'EDIT Go to next item',
          trackRoleDescription: 'EDIT Carousel track',
          trackAriaLabel: 'EDIT Carousel items',
          rangeMessage: (first, last, total) =>
            'EDIT Showing items ' + first + ' to ' + last + ' of ' + total,
        }
      }
    `}};var y={ioTable_1:{tableHeader:r.inputTableHeader,tableRows:[["transition","Enables or disables slide transition animation.","true"],["advanceMode","Defines how the carousel advances (single or page).","'page'"],["arrowStyle","Sets the arrow appearance (minimal or solid).","'minimal'"],["hideArrowsOnEdges","Hides navigation arrows when at the first or last slide.","true"],["hideArrowsWhenNoOverflow","Hides arrows if all items fit within the carousel width.","true"]]},ioTable_2:{tableHeader:r.inputTableHeader,tableRows:[["lang","Select the language for accessibility","'en'"],["customAria","Set up your own custom aria attributes (more info below)","null"]]},styTable_1:{tableHeader:r.varTableHeader,tableRows:[["--carousel-accent-color","Defines the main accent color for icons and focus outlines.","currentColor"],["--carousel-arrows-solid-bg","Background color for solid-style navigation arrows.","#444444"],["--carousel-arrows-hover-bg","Background color of arrows when hovered.","#acacac"],["--carousel-arrows-hover-color","Icon color of arrows when hovered.","var(--carousel-accent-color)"],["--carousel-transition-time","Duration of the carousel slide transition animation.",".3s"]]},accTable_1:{tableHeader:r.propsTableHeader,tableRows:[["globalAriaLabel","aria-label for the global container. Useful to indicate that the user has entered a carousel component."],["globalRoleDescription","Describes the role of the carousel region (e.g., \u201Ccarousel\u201D or \u201Cimage gallery\u201D) to assistive technologies."],["prevBtnAriaLabel","Label for the \u201Cprevious\u201D navigation button. Communicates its purpose to screen readers."],["nextBtnAriaLabel","Label for the \u201Cnext\u201D navigation button. Communicates its purpose to screen readers."],["trackRoleDescription","Describes the carousel track region that contains the sliding items (e.g., \u201Clist of items\u201D)."],["trackAriaLabel","Label for the carousel track. Can be used to describe what the list contains (e.g., \u201Cfeatured products\u201D)."],["rangeMessage","Function that returns a message indicating the current visible item range in relation to the total (e.g., \u201CShowing items 1\u20133 of 10\u201D). Useful for providing dynamic feedback to screen readers."]]}};var w=class d{docCode=c(v);docTables=c(y);metaTagsService=u(g);ngOnInit(){this.metaTagsService.setMetaTags({title:"Content Carousel \u2022 UUX Angular",description:"UUX Content Carousel component documentation",image:"/components/content-carousel",url:"/components/content-carousel/documentation",type:"article"})}static \u0275fac=function(s){return new(s||d)};static \u0275cmp=m({type:d,selectors:[["app-content-carousel-doc"]],decls:147,vars:28,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],[1,"note"],["sectionCode","io"],[3,"tableData"],["sectionCode","sty"],["sectionCode","acc"],["routerLink",".","fragment","content-carousel-io"]],template:function(s,n){s&1&&(a(0,"doc-section-title",0),o(1,"p")(2,"em"),e(3,"ng-content-carousel"),t(),e(4," is a "),o(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),o(8,"p"),e(9," It is designed to work with "),o(10,"em"),e(11,"signals"),t(),e(12," and Angular "),o(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible content carousel. It is also fully compatible with "),o(16,"em"),e(17,"SSR"),t(),e(18,", "),o(19,"em"),e(20,"CSR"),t(),e(21," and "),o(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),a(25,"app-divider")(26,"doc-section-title",1),o(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),a(29,"app-code-block",2),o(30,"p"),e(31,"Angular 19:"),t(),a(32,"app-code-block",2),o(33,"p"),e(34,"Angular 18:"),t(),a(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),o(38,"p"),e(39,"Using "),o(40,"em"),e(41,"ng-content-carousel"),t(),e(42," is easy:"),t(),o(43,"ul")(44,"li"),e(45,"Provide content for the carousel using de "),o(46,"em"),e(47,"contentCarouselItem"),t(),e(48," directive. Each element with this tag will represent one item."),t(),o(49,"li"),e(50,"Configure its style, behavior, and accessibility using inputs.."),t(),o(51,"li"),e(52,"Style it with customizable CSS variables to match your design needs."),t()(),o(53,"p"),e(54,"Here\u2019s a basic usage example:"),t(),a(55,"app-code-block",2)(56,"app-divider")(57,"doc-section-title",4),o(58,"p"),e(59,"As shown in the example below, you just have the import the ContentCarouselItemDirective on your component and use contentCarouselItem on each container (this container can be any label: < a >, < div >, < section >... )."),t(),o(60,"div",5)(61,"p")(62,"em"),e(63,"IMPORTANT:"),t(),e(64," All elements should have the same width so the carousel mechanism works well."),t()(),a(65,"app-divider")(66,"doc-section-title",6),o(67,"p"),e(68,"Here is a list of all input/ouput:"),t(),o(69,"h3"),e(70,"Style & Behavior Inputs"),t(),a(71,"app-data-table",7),o(72,"h3"),e(73,"Accessibility Inputs"),t(),a(74,"app-data-table",7)(75,"app-divider")(76,"doc-section-title",8),o(77,"p"),e(78,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),t(),a(79,"app-code-block",2)(80,"app-data-table",7),o(81,"p"),e(82,"When using the carouselItem directive, a predefined class is added to each element: .carousel-item. This class have some predefined properties:"),t(),a(83,"app-code-block",2),o(84,"p"),e(85,"You can change this initial properties if you want simply using the class in you component:"),t(),a(86,"app-code-block",2),o(87,"p")(88,"em"),e(89,"IMPORTANT:"),t(),e(90," the component itselfs calculate his width related to items width. If you want to give space between items, use padding."),t(),o(91,"p")(92,"em"),e(93,"IMPORTANT:"),t(),e(94," Ideally you will the label with the carouselItem directive as a item container and, if you want to add several labels into it, it is appropiate to use another container inside. For example:"),t(),a(95,"app-code-block",2)(96,"app-divider")(97,"doc-section-title",9),o(98,"p"),e(99,"There are two ways of setting the aria-label attributes: by "),o(100,"em"),e(101,"lang"),t(),e(102," attribute or by "),o(103,"em"),e(104,"customAria"),t(),e(105," attribute (See "),o(106,"a",10),e(107,"Accessibility Inputs"),t(),e(108," at Inputs and Outputs section)"),t(),o(109,"p"),e(110,"If needed, you can import ContentCarouselLangs and ContentCarouselCustomAria types like this:"),t(),a(111,"app-code-block",2),o(112,"h3"),e(113,"'lang' attribute:"),t(),o(114,"p"),e(115,"The component includes "),o(116,"em"),e(117,"five predefined languages"),t(),e(118," for accessibility labels that you can set easily with the lang attribute:"),t(),o(119,"p"),e(120,"Laguages can be: english (en), spanish (es), italian (it), french (fr) or deutch (de) "),t(),o(121,"p"),e(122,"*** We recommend using the lang attribute if you don't need any other languages than the ones provided by default. It's simple and compliant with WAI-ARIA standards. ***"),t(),a(123,"app-code-block",2),o(124,"div",5)(125,"p"),e(126,"\u{1F4A1} If no value is provided in lang, the default language is English (en)."),t(),o(127,"p"),e(128,"\u{1F4A1} If your application supports multiple languages, you can bind the lang attribute to a signal and link it with a select, for example."),t()(),o(129,"h3"),e(130,"'customAria' attribute:"),t(),o(131,"p"),e(132,"In addition to the predefined languages available through the lang attribute, you can fully customize the ARIA labels for your menu button by using the customAria input."),t(),o(133,"p"),e(134,"This option gives you full control over the text announced by screen readers when the menu is opened or closed \u2014 perfect for custom translations, accessibility improvements, or when you want to use a language that is not included in the predefined set."),t(),e(135," Here is the exact declaration of the ContentCarouselCustomAria type: "),a(136,"app-code-block",2),e(137," Here you can see a description of every field in ContentCarouselCustomAria interface. Every field is type string (except slideAriaLabel) and non-required: "),a(138,"app-data-table",7),o(139,"p"),e(140,"Example of usage:"),t(),a(141,"app-code-block",2),o(142,"div",5)(143,"p"),e(144,"\u{1F4A1} Remember that what is indicated in the customAria attribute replaces the default language set in lang."),t(),o(145,"p"),e(146,"\u{1F4A1} If you only set one of the properties, the other will use the label from the current lang."),t()()),s&2&&(i(29),l("language",n.docCode().installationCode_1.language)("code",n.docCode().installationCode_1.code),i(3),l("language",n.docCode().installationCode_2.language)("code",n.docCode().installationCode_2.code),i(3),l("language",n.docCode().installationCode_3.language)("code",n.docCode().installationCode_3.code),i(20),l("language",n.docCode().overviewCode_1.language)("code",n.docCode().overviewCode_1.code),i(16),l("tableData",n.docTables().ioTable_1),i(3),l("tableData",n.docTables().ioTable_2),i(5),l("language",n.docCode().stylingCode_1.language)("code",n.docCode().stylingCode_1.code),i(),l("tableData",n.docTables().styTable_1),i(3),l("language",n.docCode().stylingCode_2.language)("code",n.docCode().stylingCode_2.code),i(3),l("language",n.docCode().stylingCode_3.language)("code",n.docCode().stylingCode_3.code),i(9),l("language",n.docCode().stylingCode_4.language)("code",n.docCode().stylingCode_4.code),i(16),l("language",n.docCode().accCode_1.language)("code",n.docCode().accCode_1.code),i(12),l("language",n.docCode().accCode_2.language)("code",n.docCode().accCode_2.code),i(13),l("language",n.docCode().accCode_3.language)("code",n.docCode().accCode_3.code),i(2),l("tableData",n.docTables().accTable_1),i(3),l("language",n.docCode().accCode_4.language)("code",n.docCode().accCode_4.code))},dependencies:[b,h,f,C,p],encapsulation:2,changeDetection:0})};export{w as ContentCarouselDoc};
