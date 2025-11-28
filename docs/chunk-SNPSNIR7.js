import{a as v}from"./chunk-NI6Y3Y6G.js";import{e as r,h}from"./chunk-FIO25GLS.js";import"./chunk-WYHA5YSP.js";import{Bb as g,Cb as u,Db as b,Ha as l,Ia as a,Ja as t,Ka as n,Q as m,ba as d,cb as e,la as o,sa as p}from"./chunk-DJ42HLST.js";var y={installationCode_1:{language:"bash",code:"npm install ng-ratings"},installationCode_2:{language:"bash",code:"npm install ng-ratings@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-ratings@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { Component, signal } from '@angular/core';
      import { NgRatings } from 'ng-ratings';

      @Component({
        selector: 'app-root',
        standalone: true,
        imports: [NgRatings],
        template: \`
          <ng-ratings
            [average]="3.4"
            [items]="7"
            icon="heart"
            [readOnly]="false"
            [hover]="['translateY', 'scale']"
          />
        \`
      })
      export class App {}
    `},stylingCode_1:{language:"css",code:`
      ng-ratings{
        max-height: 35px;
        --rating-filled-color: blue;
        --rating-stroke-width: .4;
        --rating-empty-color: white;
      }
    `},accCode_1:{language:"ts",code:`
      import { RatingCustomAria } from 'ng-ratings';
    `},accCode_2:{language:"ts",code:`
      export interface RatingCustomAria {
        containerReadOnlyAriaLabel?: string;
        containerInteractiveAriaLabel?: string;
        buttonInteractiveAriaLabel?: (value: number, total: number) => string;
      };
    `},accCode_3:{language:"ts",code:`
      import { NgRatings, RatingCustomAria } from 'ng-ratings';

      @Component({
        imports: [NgRatings],
        template: \`
          <ng-ratings
            [items]="4"
            [average]="2.5"
            [customAria]="accOpts()"
          />
        \`
      })
      class App {
        accOpts = signal<RatingCustomAria>({
          containerInteractiveAriaLabel: 'CUSTOM - Average rating',
          buttonInteractiveAriaLabel: (value, total) =>
              'CHANGED - Select ' + value + 'of ' + total
        });
      }
    `}};var f={ioTable_1:{tableHeader:r.inputTableHeader,tableRows:[["items","Number of icons displayed in the rating. Also defines the valid range for the average value.","5"],["average","Initial average value to display, rendered according to the selected number of items.","0"],["readOnly","If true, the component shows only the average; if false, the user can vote.","false"]]},ioTable_2:{tableHeader:r.outputTableHeader,tableRows:[["vote","Emits the selected rating value when the user votes (only if not in readOnly mode).","\u2014"]]},ioTable_3:{tableHeader:r.inputTableHeader,tableRows:[["icon","Icon style used for each item in the rating (star or heart).","'star'"],["hover","Hover animation applied on each item. Accepts one or several effects, or 'none' to disable it.","['scale']"]]},ioTable_4:{tableHeader:r.inputTableHeader,tableRows:[["lang","Defines the language for built-in ARIA labels (en, es, fr, etc.).","'en'"],["customAria","Provides custom ARIA labels to override default accessibility text.","null"]]},styTable_1:{tableHeader:r.varTableHeader,tableRows:[["--rating-shadow","Drop-shadow applied to the rating container.","2px 2px 5px rgba(0,0,0,.548)"],["--rating-hover-transition-duration","Duration of the hover animation on icons.",".3s"],["--rating-focus-ring","Outline style applied when an item receives focus.","2px solid var(--rating-stroke-color, white)"],["--rating-item-x-padding","Horizontal spacing between each icon.",".3rem"],["--rating-filled-color","Fill color used for the filled portion of icons.","gold (stars), red (hearts)"],["--rating-stroke-color","Stroke color applied to icon outlines.","white"],["--rating-stroke-width","Width of the icon stroke.",".7"],["--rating-empty-color","Color for the unfilled portion of icons.","transparent"]]},accTable_1:{tableHeader:r.propsTableHeader,tableRows:[["containerReadOnlyAriaLabel","aria-label for the rating container when the component is in read-only mode."],["containerInteractiveAriaLabel","aria-label for the rating container when interaction (voting) is allowed."],["buttonInteractiveAriaLabel","Function that returns the aria-label for each interactive rating button (receives value and total)."]]}};var C=class c{docCode=d(y);docTables=d(f);metaTagsService=m(g);ngOnInit(){this.metaTagsService.setMetaTags({title:"Ratings \u2022 UUX Angular",description:"UUX Rating component documentation",image:"/components/ratings",url:"/components/ratings/documentation",type:"article"})}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=p({type:c,selectors:[["app-ratings-doc"]],decls:133,vars:22,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],[1,"note"],["sectionCode","io"],[3,"tableData"],["sectionCode","sty"],["sectionCode","acc"]],template:function(s,i){s&1&&(n(0,"doc-section-title",0),a(1,"p")(2,"em"),e(3,"ng-ratings"),t(),e(4," is a "),a(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),a(8,"p"),e(9," It is designed to work with "),a(10,"em"),e(11,"signals"),t(),e(12," and Angular "),a(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible rating component. It is also fully compatible with "),a(16,"em"),e(17,"SSR"),t(),e(18,", "),a(19,"em"),e(20,"CSR"),t(),e(21," and "),a(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),n(25,"app-divider")(26,"doc-section-title",1),a(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),n(29,"app-code-block",2),a(30,"p"),e(31,"Angular 19:"),t(),n(32,"app-code-block",2),a(33,"p"),e(34,"Angular 18:"),t(),n(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),a(38,"p"),e(39,"Using "),a(40,"em"),e(41,"ng-ratings"),t(),e(42," is easy:"),t(),a(43,"ul")(44,"li"),e(45,"Set the average you want to show at "),a(46,"em"),e(47,"(average)"),t(),e(48," input and/or able the component to generate votes using the "),a(49,"em"),e(50,"[readOnly]"),t(),e(51," input (you will get the vote value through (vote) output) ."),t(),a(52,"li"),e(53,"Configure its type, icon, hover behavior and accessibility using inputs."),t(),a(54,"li"),e(55,"Style it with customizable CSS variables to match your design needs."),t()(),a(56,"p"),e(57,"Here\u2019s a basic usage example:"),t(),n(58,"app-code-block",2)(59,"app-divider")(60,"doc-section-title",4),a(61,"p"),e(62,"First of all, the "),a(63,"em"),e(64,"[items]"),t(),e(65,' input specifies the total number of selectable units in the rating component. For example, if you choose [items]="3", you will have a rating of three stars/hearts.'),t(),a(66,"p"),e(67,"With the "),a(68,"em"),e(69,"[average]"),t(),e(70," input, you can provide the value that the component should display as the current rating. The icons will be filled according to this value."),t(),a(71,"div",5)(72,"p"),e(73,'It is important to ensure that the [average] you provide matches the scale defined by [items]. For example, if items="3", the average should always be a value between 0 and 3.'),t()(),a(74,"h3"),e(75,"readOnly"),t(),a(76,"p"),e(77,"The component supports two usage modes: one for displaying an average value, and another that also allows the user to submit a rating."),t(),a(78,"p"),e(79,"When "),a(80,"em"),e(81,'[readOnly]="false", the component becomes eminteractive'),t(),e(82,". Users can move their pointer or focus with the keyboard to select a rating, and when they click or press Enter, the component emits the selected value through the "),a(83,"em"),e(84,"(vote) output"),t(),e(85,"."),t(),a(86,"p")(87,"em"),e(88,"readOnly is false by default"),t(),e(89,". If you only intend to use the component to display averages, you can enable the read-only mode by setting readOnly to true."),t(),n(90,"app-divider")(91,"doc-section-title",6),a(92,"p"),e(93,"Here is a list of all input/ouput:"),t(),a(94,"h3"),e(95,"Functionality Inputs"),t(),n(96,"app-data-table",7),a(97,"h3"),e(98,"Functionality Output"),t(),n(99,"app-data-table",7),a(100,"h3"),e(101,"Style & Behavior Inputs"),t(),n(102,"app-data-table",7),a(103,"h3"),e(104,"Accessibility Inputs"),t(),n(105,"app-data-table",7)(106,"app-divider")(107,"doc-section-title",8),a(108,"p"),e(109,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),t(),n(110,"app-code-block",2)(111,"app-data-table",7)(112,"app-divider")(113,"doc-section-title",9),a(114,"p"),e(115,"This component includes five default languages (en, es, it, fr, de). When you choose one using the lang input, all accessibility settings are configured in that language, so you don't have to do anything else."),t(),a(116,"p"),e(117,"*** We recommend using the lang input if you don't need any other languages than the ones provided by default. It's simple and compliant with WAI-ARIA standards. ***"),t(),a(118,"p"),e(119,"If you want to set up your own custom aria attributes, you should use the RatingCustomAria interface. You can import it directly from the component:"),t(),n(120,"app-code-block",2),e(121," Here is the exact declaration of the RatingCustomAria type: "),n(122,"app-code-block",2),a(123,"p"),e(124,"Here you can see a description of every field in RatingCustomAria interface. Every field is type string (except buttonInteractiveAriaLabel) and non-required"),t(),n(125,"app-data-table",7),a(126,"div",5)(127,"p")(128,"em"),e(129,"IMPORTANT: "),t(),e(130,'All fields are optional, so you can customize only the ones you want. Fields that have not been entered in "AccessibilityOptions" will retain their values \u200B\u200Bbased on the selected "lang" (remember, default lang is "en")'),t()(),e(131," Here you have an example of use: "),n(132,"app-code-block",2)),s&2&&(o(29),l("language",i.docCode().installationCode_1.language)("code",i.docCode().installationCode_1.code),o(3),l("language",i.docCode().installationCode_2.language)("code",i.docCode().installationCode_2.code),o(3),l("language",i.docCode().installationCode_3.language)("code",i.docCode().installationCode_3.code),o(23),l("language",i.docCode().overviewCode_1.language)("code",i.docCode().overviewCode_1.code),o(38),l("tableData",i.docTables().ioTable_1),o(3),l("tableData",i.docTables().ioTable_2),o(3),l("tableData",i.docTables().ioTable_3),o(3),l("tableData",i.docTables().ioTable_4),o(5),l("language",i.docCode().stylingCode_1.language)("code",i.docCode().stylingCode_1.code),o(),l("tableData",i.docTables().styTable_1),o(9),l("language",i.docCode().accCode_1.language)("code",i.docCode().accCode_1.code),o(2),l("language",i.docCode().accCode_2.language)("code",i.docCode().accCode_2.code),o(3),l("tableData",i.docTables().accTable_1),o(7),l("language",i.docCode().accCode_3.language)("code",i.docCode().accCode_3.code))},dependencies:[h,b,v,u],encapsulation:2,changeDetection:0})};export{C as RatingsDoc};
