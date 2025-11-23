import{a as v}from"./chunk-NTLMKWZS.js";import{e as r,h as g}from"./chunk-M4U6EHCE.js";import{h as u}from"./chunk-IA3EAMA7.js";import{Fa as m,Ub as p,Vb as b,Wa as l,Xa as a,Ya as t,Za as o,ea as c,rb as e,ua as i}from"./chunk-DJOXELE4.js";var h={installationCode_1:{language:"bash",code:"npm install ng-scroll-nav"},installationCode_2:{language:"bash",code:"npm install ng-scroll-nav@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-scroll-nav@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { NgScrollNav } from 'ng-scroll-nav';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgScrollNav, NgLinkButton],
        template: \`
          <ng-scroll-nav>
            <ng-link-button [square]="true">
              Link 1
            </ng-link-button>
            <ng-link-button [square]="true">
              This is Link 2
            </ng-link-button>
            <ng-link-button [square]="true">
              Another Link 3
            </ng-link-button>
            <ng-link-button [square]="true">
              Link 4
            </ng-link-button>
          </ng-scroll-nav>
        \`,
      })`},funcCode_1:{language:"html",code:`
      <ng-scroll-nav [scrollStep]="200" scrollBehavior="auto">
        <ng-link-button>
          Link 1
        </ng-link-button>
        <ng-link-button>
          This is Link 2
        </ng-link-button>
      </ng-scroll-nav>
      `},stylingCode_1:{language:"css",code:`
      ng-scroll-nav{
        --scroll-nav-justify-content: center;
        --scroll-nav-arrow-size: 1rem;
      }
    `},accCode_1:{language:"ts",code:`
      import { ScrollNavLangs, ScrollNavCustomAria } from 'ng-scoll-nav';
    `},accCode_2:{language:"html",code:`
      <ng-scroll-nav lang="es" />
    `},accCode_3:{language:"ts",code:`
      export interface ScrollNavCustomAria {
        navAriaLabel?: string;
        prevBtnAriaLabel?: string;
        nextBtnAriaLabel?: string;
        linksGroupAriaLabel?: string;
      };
    `},accCode_4:{language:"ts",code:`
      import { NgScrollNav, ScrollNavCustomAria } from 'ng-scroll-nav';

      @Component({
        imports: [NgScrollNav],
        template: \`
          <ng-scroll-nav lang="en" [customAria]="accOpts()">
            <ng-link-button [square]="true">
              Link 1
            </ng-link-button>
            <ng-link-button [square]="true">
              This is Link 2
            </ng-link-button>
          </ng-scroll-nav>
        \`
      })
      class App {
        accOpts = signal<ScrollNavCustomAria>({
          navAriaLabel: 'EDITED navAriaLabel',
          prevBtnAriaLabel: 'EDITED prevBtnAriaLabel',
          nextBtnAriaLabel: 'EDITED nextBtnAriaLabel',
          linksGroupAriaLabel: 'EDITED linksGroupAriaLabel',
        });
      }
    `}};var f={ioTable_1:{tableHeader:r.inputTableHeader,tableRows:[["scrollStep","Pixels that the scroll moves when you press an arrow","150"],["scrollBehavior","Scroll behavior (auto or smooth).","'smooth'"]]},ioTable_2:{tableHeader:r.inputTableHeader,tableRows:[["lang","Select the language for accessibility","'en'"],["customAria","Set up your own custom aria attributes (more info below)","null"]]},styTable_1:{tableHeader:r.varTableHeader,tableRows:[["--scroll-nav-bg","Background color of the scrollable navigation (host and arrow icons).","inherit"],["--scroll-nav-color","Main text and icon color of the scrollable navigation.","host: inherit / arrows: currentColor"],["--scroll-nav-arrow-size","Width and height of the navigation arrow icons.","1.4rem"],["--scroll-nav-justify-content","Defines the justify-content alignment for the scrollable container.","start"],["--scroll-nav-gap","Spacing (gap) between items inside the scrollable content area.","0"]]},accTable_1:{tableHeader:r.propsTableHeader,tableRows:[["globalAriaLabel","aria-label for the global container. Useful to indicate that the user has entered a carousel component."],["globalRoleDescription","Describes the role of the carousel region (e.g., \u201Ccarousel\u201D or \u201Cimage gallery\u201D) to assistive technologies."],["prevBtnAriaLabel","Label for the \u201Cprevious\u201D navigation button. Communicates its purpose to screen readers."],["nextBtnAriaLabel","Label for the \u201Cnext\u201D navigation button. Communicates its purpose to screen readers."],["trackRoleDescription","Describes the carousel track region that contains the sliding items (e.g., \u201Clist of items\u201D)."],["trackAriaLabel","Label for the carousel track. Can be used to describe what the list contains (e.g., \u201Cfeatured products\u201D)."],["rangeMessage","Function that returns a message indicating the current visible item range in relation to the total (e.g., \u201CShowing items 1\u20133 of 10\u201D). Useful for providing dynamic feedback to screen readers."]]}};var C=class d{docCode=c(h);docTables=c(f);static \u0275fac=function(s){return new(s||d)};static \u0275cmp=m({type:d,selectors:[["app-scroll-nav-doc"]],decls:137,vars:24,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],["sectionCode","io"],[3,"tableData"],["sectionCode","sty"],["sectionCode","acc"],["routerLink",".","fragment","scroll-nav-io"],[1,"note"]],template:function(s,n){s&1&&(o(0,"doc-section-title",0),a(1,"p")(2,"em"),e(3,"ng-scroll-nav"),t(),e(4," is a "),a(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),a(8,"p"),e(9," It is designed to work with "),a(10,"em"),e(11,"signals"),t(),e(12," and Angular "),a(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible scrollable nav. It is also fully compatible with "),a(16,"em"),e(17,"SSR"),t(),e(18,", "),a(19,"em"),e(20,"CSR"),t(),e(21," and "),a(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),o(25,"app-divider")(26,"doc-section-title",1),a(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),o(29,"app-code-block",2),a(30,"p"),e(31,"Angular 19:"),t(),o(32,"app-code-block",2),a(33,"p"),e(34,"Angular 18:"),t(),o(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),a(38,"p"),e(39,"The main feature of ng-scoll-nav is its scrolling functionality: if all the elements you add fit within the component, you'll have a normal navigation bar. Otherwise, the component becomes scrollable."),t(),a(40,"p"),e(41,"This component works especially well with our "),a(42,"em"),e(43,"ng-link-button"),t(),e(44," component"),t(),a(45,"p"),e(46,"Using "),a(47,"em"),e(48,"ng-scroll-nav"),t(),e(49," is easy:"),t(),a(50,"ul")(51,"li"),e(52,"Provide the links you need as children of the component."),t(),a(53,"li"),e(54,"Configure its style, behavior, and accessibility using inputs."),t(),a(55,"li"),e(56,"Style it with customizable CSS variables to match your design needs."),t()(),a(57,"p"),e(58,"Here\u2019s a basic usage example:"),t(),o(59,"app-code-block",2)(60,"app-divider")(61,"doc-section-title",4),a(62,"p"),e(63,"As shown in the example below, you just have to add link elements as children of ng-scroll-nav. Yo can use our ng-link-button or an < a > tag if you prefer."),t(),a(64,"p"),e(65,"You can control the scrolling behavior using the "),a(66,"em"),e(67,"[scrollStep]"),t(),e(68," and scrollBehavior inputs (see Inputs and Outputs) section below."),t(),o(69,"app-code-block",2)(70,"app-divider")(71,"doc-section-title",5),a(72,"p"),e(73,"Here is a list of all input/ouput:"),t(),a(74,"h3"),e(75,"Scroll inputs"),t(),o(76,"app-data-table",6),a(77,"h3"),e(78,"Accessibility Inputs"),t(),o(79,"app-data-table",6)(80,"app-divider")(81,"doc-section-title",7),a(82,"p"),e(83,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),t(),o(84,"app-code-block",2)(85,"app-data-table",6)(86,"app-divider")(87,"doc-section-title",8),a(88,"p"),e(89,"There are two ways of setting the aria-label attributes: by "),a(90,"em"),e(91,"lang"),t(),e(92," attribute or by "),a(93,"em"),e(94,"customAria"),t(),e(95," attribute (See "),a(96,"a",9),e(97,"Accessibility Inputs"),t(),e(98," at Inputs and Outputs section)"),t(),a(99,"p"),e(100,"If needed, you can import ScrollNavLangs and ScrollNavCustomAria types like this:"),t(),o(101,"app-code-block",2),a(102,"h3"),e(103,"'lang' attribute:"),t(),a(104,"p"),e(105,"The component includes "),a(106,"em"),e(107,"five predefined languages"),t(),e(108," for accessibility labels that you can set easily with the lang attribute:"),t(),a(109,"p"),e(110,"Laguages can be: english (en), spanish (es), italian (it), french (fr) or deutch (de) "),t(),a(111,"p"),e(112,"*** We recommend using the lang attribute if you don't need any other languages than the ones provided by default. It's simple and compliant with WAI-ARIA standards. ***"),t(),o(113,"app-code-block",2),a(114,"div",10)(115,"p"),e(116,"\u{1F4A1} If no value is provided in lang, the default language is English (en)."),t(),a(117,"p"),e(118,"\u{1F4A1} If your application supports multiple languages, you can bind the lang attribute to a signal and link it with a select, for example."),t()(),a(119,"h3"),e(120,"'customAria' attribute:"),t(),a(121,"p"),e(122,"In addition to the predefined languages available through the lang attribute, you can fully customize the ARIA labels for your menu button by using the customAria input."),t(),a(123,"p"),e(124,"This option gives you full control over the text announced by screen readers when the menu is opened or closed \u2014 perfect for custom translations, accessibility improvements, or when you want to use a language that is not included in the predefined set."),t(),e(125," Here is the exact declaration of the ScrollNavCustomAria type: "),o(126,"app-code-block",2),e(127," Here you can see a description of every field in ScrollNavCustomAria interface. Every field is type string (except slideAriaLabel) and non-required: "),o(128,"app-data-table",6),a(129,"p"),e(130,"Example of usage:"),t(),o(131,"app-code-block",2),a(132,"div",10)(133,"p"),e(134,"\u{1F4A1} Remember that what is indicated in the customAria attribute replaces the default language set in lang."),t(),a(135,"p"),e(136,"\u{1F4A1} If you only set one of the properties, the other will use the label from the current lang."),t()()),s&2&&(i(29),l("language",n.docCode().installationCode_1.language)("code",n.docCode().installationCode_1.code),i(3),l("language",n.docCode().installationCode_2.language)("code",n.docCode().installationCode_2.code),i(3),l("language",n.docCode().installationCode_3.language)("code",n.docCode().installationCode_3.code),i(24),l("language",n.docCode().overviewCode_1.language)("code",n.docCode().overviewCode_1.code),i(10),l("language",n.docCode().funcCode_1.language)("code",n.docCode().funcCode_1.code),i(7),l("tableData",n.docTables().ioTable_1),i(3),l("tableData",n.docTables().ioTable_2),i(5),l("language",n.docCode().stylingCode_1.language)("code",n.docCode().stylingCode_1.code),i(),l("tableData",n.docTables().styTable_1),i(16),l("language",n.docCode().accCode_1.language)("code",n.docCode().accCode_1.code),i(12),l("language",n.docCode().accCode_2.language)("code",n.docCode().accCode_2.code),i(13),l("language",n.docCode().accCode_3.language)("code",n.docCode().accCode_3.code),i(2),l("tableData",n.docTables().accTable_1),i(3),l("language",n.docCode().accCode_4.language)("code",n.docCode().accCode_4.code))},dependencies:[g,b,v,p,u],encapsulation:2,changeDetection:0})};export{C as ScrollNavDoc};
