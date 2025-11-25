import{a as f}from"./chunk-NP7TIR3N.js";import{e as r,h}from"./chunk-AYL274CR.js";import{e as m}from"./chunk-5JG6NEMX.js";import{Ab as b,Bb as g,Cb as v,Ha as l,Ia as n,Ja as t,Ka as i,Q as c,ba as d,cb as e,la as a,sa as p}from"./chunk-VWLHZTRG.js";var k={installationCode_1:{language:"bash",code:"npm install ng-link-button"},installationCode_2:{language:"bash",code:"npm install ng-link-button@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-link-button@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { Component, signal } from '@angular/core';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [ NgLinkButton ],
        template: \`
          <ng-link-button
            routerLink="home"
            type="solid"
            [square]="true"
            hover="shadow"
            ariaLabel="Custom aria label"
          >
            Link button inner content
          </ng-link-button>
        \`,
      })
      export class App {

      }
    `},functionalityCode_1:{language:"ts",code:`
      import { Component, inject } from '@angular/core';
      import { ActivatedRoute } from '@angular/router';
      import { NgLinkButton } from 'ng-link-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [NgLinkButton],
        template: \`
          <ng-link-button
            routerLink="home"
            [activatedRoute]="false"
            [queryParams]="{ category: 'books', sort: 'price' }"
            fragment="fragmentExample"
            [relativeTo]="activatedRoute"
            queryParamsHandling="merge"
            [state]="{ state: 'state example' }"
          >
            Link button inner content
          </ng-link-button>
        \`,
      })
      export class App {
        activatedRoute = inject(ActivatedRoute);
      }
    `},functionalityCode_2:{language:"html",code:`
      <ng-link-button
        href="https://universalux.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        Link button inner content
      </ng-link-button>
    `},stylingCode_1:{language:"css",code:`
      ng-link-button {
        --link-button-bg: orange;
        --link-button-hover-bg: red;
      }
    `},stylingCode_2:{language:"css",code:`
      ng-link-button[type="solid"] {
        --link-button-bg: orange;
      }
    `},stylingCode_3:{language:"css",code:`
      ng-link-button.myClass {
        --link-button-outline: 2px solid orange;
      }
    `}};var y={ioTable_1:{tableHeader:r.inputTableHeader,tableRows:[["routerLink","Defines the internal navigation route.","undefined"],["activatedRoute","Enables ActivatedRoute context usage.","true"],["queryParams","Adds query parameters to the route.","null"],["fragment","Defines a URL fragment (anchor).","undefined"],["relativeTo","Sets a relative navigation based on an ActivatedRoute.","null"],["queryParamsHandling","Strategy for handling query params (merge / preserve).","null"],["state","Adds custom navigation state data.","undefined"]]},ioTable_2:{tableHeader:r.inputTableHeader,tableRows:[["href","Defines the external link URL.","null"],["target","Specifies where to open the link (_blank, _self...).","'_blank'"],["rel","Defines the link relation attribute for security.","'noreferrer noopener'"]]},ioTable_3:{tableHeader:r.inputTableHeader,tableRows:[["type","Defines the button\u2019s visual style (solid, minimal, or outline).","'solid'"],["square","Makes the button shape perfectly square instead of rounded.","false"],["hover","Sets the hover effect style (tone, scale, stroke, shadow, or none).","'tone'"],["direction","Arranges the button\u2019s inner content horizontally or vertically. (row / column).","'row'"]]},ioTable_4:{tableHeader:r.inputTableHeader,tableRows:[["ariaLabel","Provides an accessible label for assistive technologies.","null"],["title","Sets the native tooltip text shown on hover.","null"],["tabIndex","Controls the button\u2019s tab order in keyboard navigation.","0"],["ariaCurrent","Indicates the current item in a set (e.g. current page).","null"],["download","Suggests that the link should be downloaded as a file.","null"],["role","Defines the ARIA role (link or button).","null"],["disabled","Disables the button and prevents user interaction.","false"]]},styTable_1:{tableHeader:r.varTableHeader,tableRows:[["--simple-button-width","Defines the button width.","fit-content"],["--simple-button-height","Sets the button height.","auto"],["--simple-button-radius","Controls the corner roundness.","1.3rem"],["--simple-button-padding","Sets the inner spacing.",".5rem 1rem"],["--simple-button-gap","Space between icon and label.",".5rem"],["--simple-button-justify-content","Horizontal alignment of content.","center"],["--simple-button-align-items","Vertical alignment of content.","center"]]},styTable_2:{tableHeader:r.varTableHeader,tableRows:[["--simple-button-bg","Background color of the button.","white (solid) / transparent (outline, minimal)"],["--simple-button-color","Main color.","black (solid) / inherit (outline, minimal)"],["--simple-button-border","Defines the border style.","none (solid, minimal) / 2px solid currentColor (outline)"],["--simple-button-focus-ring","Outline shown when focused.","2px solid currentColor"],["--simple-button-transition-duration","Duration of hover/focus transitions.",".3s"]]},styTable_3:{tableHeader:r.varTableHeader,tableRows:[["--link-button-hover-color","Text color on hover.","var(--link-button-color, black)"],["--link-button-hover-scale","Scale effect applied on hover.","1.05 (scaleHover)"],["--link-button-hover-shadow","Box shadow applied on hover.","2px 2px 5px #525252 (shadowHover)"],["--link-button-hover-bg","Background color on hover.","#949494 (toneHover)"],["--link-button-hover-stroke","Outline stroke on hover.","2px solid currentColor (strokeHover)"],["--link-button-active-color","Text color when active.","var(--link-button-color, black)"],["--link-button-active-scale","Scale effect when active.","1.05 (scaleHover)"],["--link-button-active-shadow","Box shadow when active.","2px 2px 5px #525252 (shadowHover)"],["--link-button-active-bg","Background color when active.","#949494 (toneHover)"],["--link-button-active-stroke","Outline stroke when active.","2px solid currentColor (strokeHover)"]]}};var C=class u{docCode=d(k);docTables=d(y);metaTagsService=c(b);ngOnInit(){this.metaTagsService.setMetaTags({title:"Link Button \u2022 UUX Angular",description:"UUX Link Button component documentation",image:"/assets/images/thumbnails/link-button_thumbnail_1200px.webp",url:"/components/link-button/documentation",type:"article"})}static \u0275fac=function(s){return new(s||u)};static \u0275cmp=p({type:u,selectors:[["app-link-button-doc"]],decls:141,vars:25,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],[1,"note"],["routerLink",".","fragment","link-button-io"],["sectionCode","io"],[3,"tableData"],["sectionCode","sty"],["sectionCode","acc"]],template:function(s,o){s&1&&(i(0,"doc-section-title",0),n(1,"p")(2,"em"),e(3,"ng-link-button"),t(),e(4," is a "),n(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),n(8,"p"),e(9," It is designed to work with "),n(10,"em"),e(11,"signals"),t(),e(12," and Angular "),n(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible link button. It is also fully compatible with "),n(16,"em"),e(17,"SSR"),t(),e(18,", "),n(19,"em"),e(20,"CSR"),t(),e(21," and "),n(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),i(25,"app-divider")(26,"doc-section-title",1),n(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),i(29,"app-code-block",2),n(30,"p"),e(31,"Angular 19:"),t(),i(32,"app-code-block",2),n(33,"p"),e(34,"Angular 18:"),t(),i(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),n(38,"p"),e(39,"Using "),n(40,"em"),e(41,"ng-link-button"),t(),e(42," is easy:"),t(),n(43,"ul")(44,"li"),e(45,"You can define the navigation path in two ways: using "),n(46,"em"),e(47,"href"),t(),e(48," or "),n(49,"em"),e(50,"routerLink"),t(),e(51," (see next section)"),t(),n(52,"li"),e(53,"Configure its type, shape, hover behavior, and accessibility using inputs.."),t(),n(54,"li"),e(55,"Style it with customizable CSS variables to match your design needs."),t()(),n(56,"p"),e(57,"Here\u2019s a basic usage example:"),t(),i(58,"app-code-block",2)(59,"app-divider")(60,"doc-section-title",4),n(61,"p"),e(62,"As it was mencioned below, you can set navigation route in two ways: "),n(63,"em"),e(64,"href"),t(),e(65," (ideally for external links) or "),n(66,"em"),e(67,"routerLink"),t(),e(68," (for page routes)."),t(),n(69,"h3"),e(70,"Router Link Mode"),t(),n(71,"div",5)(72,"p")(73,"em"),e(74,"IMPORTANT:"),t(),e(75," When using routerLink mode, the button itself will manage RouterLink dependencies. You must ensure that you do not import RouterLink into the component that uses ng-link-button. Doing so won't break functionality, but it may cause unexpected effects."),t()(),n(76,"p"),e(77,"Here\u2019s an example showing all available properties in routerLink mode."),t(),n(78,"p"),e(79,"Keep in mind that the only required input is routerLink. You don\u2019t need to use all the other inputs at once \u2014 this is just a complete example for reference."),t(),i(80,"app-code-block",2),n(81,"div",5)(82,"p"),e(83,"To get more info about this inputs, see the section "),n(84,"a",6),e(85,"Inputs and Outputs"),t(),e(86," below"),t()(),n(87,"h3"),e(88,"Href Link Mode"),t(),n(89,"p"),e(90,"Here\u2019s an example showing all available properties in href mode."),t(),n(91,"p"),e(92,"Keep in mind that the only required input is href. You don\u2019t need to use all the other inputs at once \u2014 this is just a complete example for reference."),t(),i(93,"app-code-block",2)(94,"app-divider")(95,"doc-section-title",7),n(96,"p"),e(97,"Here is a list of all input/ouput:"),t(),n(98,"h3"),e(99,"Router Link Inputs"),t(),i(100,"app-data-table",8),n(101,"h3"),e(102,"Href Inputs"),t(),i(103,"app-data-table",8),n(104,"h3"),e(105,"Style & Behavior Inputs"),t(),i(106,"app-data-table",8),n(107,"h3"),e(108,"Accessibility Inputs"),t(),i(109,"app-data-table",8)(110,"app-divider")(111,"doc-section-title",9),n(112,"p"),e(113,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),t(),i(114,"app-code-block",2),n(115,"h3"),e(116,"Layout & Spacing"),t(),i(117,"app-data-table",8),n(118,"h3"),e(119,"Style & Visuals"),t(),i(120,"app-data-table",8),n(121,"h3"),e(122,"Hover & Active Effects"),t(),i(123,"app-data-table",8),n(124,"div",5)(125,"p"),e(126,"The active class is automatically applied when the current route matches the link\u2019s routerLink. This behavior depends on the ActivatedRoute context when activatedRoute input is enabled (default: true)."),t()(),n(127,"h3"),e(128,"Styling considerations:"),t(),n(129,"p"),e(130,"You can apply styles to a specific button type as follows:"),t(),i(131,"app-code-block",2),n(132,"p"),e(133,"If you have multiple buttons and need different custom styles, you can also add a class to target them more precisely:"),t(),i(134,"app-code-block",2)(135,"app-divider")(136,"doc-section-title",10),n(137,"p"),e(138,"You can configure the accessibility of the component using the accessibility inputs explained in the inputs/outputs section: "),n(139,"a",6),e(140,"Accessibility Inputs"),t()()),s&2&&(a(29),l("language",o.docCode().installationCode_1.language)("code",o.docCode().installationCode_1.code),a(3),l("language",o.docCode().installationCode_2.language)("code",o.docCode().installationCode_2.code),a(3),l("language",o.docCode().installationCode_3.language)("code",o.docCode().installationCode_3.code),a(23),l("language",o.docCode().overviewCode_1.language)("code",o.docCode().overviewCode_1.code),a(22),l("language",o.docCode().functionalityCode_1.language)("code",o.docCode().functionalityCode_1.code),a(13),l("language",o.docCode().functionalityCode_2.language)("code",o.docCode().functionalityCode_2.code),a(7),l("tableData",o.docTables().ioTable_1),a(3),l("tableData",o.docTables().ioTable_2),a(3),l("tableData",o.docTables().ioTable_3),a(3),l("tableData",o.docTables().ioTable_4),a(5),l("language",o.docCode().stylingCode_1.language)("code",o.docCode().stylingCode_1.code),a(3),l("tableData",o.docTables().styTable_1),a(3),l("tableData",o.docTables().styTable_2),a(3),l("tableData",o.docTables().styTable_3),a(8),l("language",o.docCode().stylingCode_2.language)("code",o.docCode().stylingCode_2.code),a(3),l("language",o.docCode().stylingCode_3.language)("code",o.docCode().stylingCode_3.code))},dependencies:[h,v,f,g,m],encapsulation:2,changeDetection:0})};export{C as LinkButtonDoc};
