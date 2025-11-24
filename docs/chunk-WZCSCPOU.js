import{a as v}from"./chunk-NP7TIR3N.js";import{e as s,h}from"./chunk-CIYC6JQE.js";import{e as u}from"./chunk-5JG6NEMX.js";import{Ab as b,Bb as g,Cb as y,Ha as l,Ia as t,Ja as o,Ka as i,Q as p,ba as r,cb as e,la as a,sa as m}from"./chunk-VWLHZTRG.js";var C={installationCode_1:{language:"bash",code:"npm install ng-simple-button"},installationCode_2:{language:"bash",code:"npm install ng-simple-button@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-simple-button@v18-lts"},overviewCode_1:{language:"ts",code:`
      import { Component, signal } from '@angular/core';
      import { NgSimpleButton } from 'ng-simple-button';

      @Component({
        selector: 'app',
        standalone: true,
        imports: [NgSimpleButton],
        template: \`
          <ng-simple-button
            (onClick)="clickFunction()"
            type="solid"
            [square]="true"
            hover="shadow"
            ariaLabel="Custom aria label"
          >
            Simple button inner content
          </ng-simple-button>

          <p>Clicked {{ count() }} times</p>
        \`,
      })
      export class App {
        count = signal<number>(1);

        clickFunction() {
          const current = this.count();
          this.count.set(current + 1);
        }
      };`},functionalityCode_1:{language:"html",code:`
      <ng-simple-button (onClick)="handleClick($event)">
        Click me
      </ng-simple-button>
    `},functionalityCode_2:{language:"ts",code:`
      handleClick(event: MouseEvent) {
        console.log(event.clientX, event.clientY);
      }
    `},stylingCode_1:{language:"css",code:`
      ng-simple-button {
        --simple-button-bg: orange;
        --simple-button-hover-bg: red;
      }
    `},stylingCode_2:{language:"css",code:`
      ng-simple-button[type="solid"] {
        --simple-button-bg: orange;
      }
    `},stylingCode_3:{language:"css",code:`
      ng-simple-button.myClass {
        --simple-button-outline: 2px solid orange;
      }
    `}};var f={ioTable_1:{tableHeader:s.outputTableHeader,tableRows:[["onClick","Emits a MouseEvent when the button is clicked.","-"]]},ioTable_2:{tableHeader:s.inputTableHeader,tableRows:[["type","Defines the button\u2019s visual style (solid, minimal, or outline).","'solid'"],["square","Makes the button shape perfectly square instead of rounded.","false"],["hover","Sets the hover effect style (tone, scale, stroke, shadow, or none).","'tone'"],["direction","Arranges the button\u2019s inner content horizontally or vertically. (row / column).","'row'"]]},ioTable_3:{tableHeader:s.inputTableHeader,tableRows:[["ariaLabel","Provides an accessible label for assistive technologies.	","null"],["title","Sets the native tooltip text shown on hover.","null"],["tabIndex","Controls the button\u2019s tab order in keyboard navigation.","0"],["disabled","Disables the button and prevents user interaction.	","false"]]},styTable_1:{tableHeader:s.varTableHeader,tableRows:[["--simple-button-width","Defines the button width.","fit-content"],["--simple-button-height","Sets the button height.","auto"],["--simple-button-radius","Controls the corner roundness.","1.3rem"],["--simple-button-padding","Sets the inner spacing.",".5rem 1rem"],["--simple-button-gap","Space between icon and label.",".5rem"],["--simple-button-justify-content","Horizontal alignment of content.","center"],["--simple-button-align-items","Vertical alignment of content.","center"]]},styTable_2:{tableHeader:s.varTableHeader,tableRows:[["--simple-button-bg","Background color of the button.","white (solid) / transparent (outline, minimal)"],["--simple-button-color","Main color.","black (solid) / inherit (outline, minimal)"],["--simple-button-border","Defines the border style.","none (solid, minimal) / 2px solid currentColor (outline)"],["--simple-button-focus-ring","Outline shown when focused.","2px solid currentColor"],["--simple-button-transition-duration","Duration of hover/focus transitions.",".3s"]]},styTable_3:{tableHeader:s.varTableHeader,tableRows:[["--simple-button-hover-color","Text color on hover.","var(--simple-button-color, black)"],["--simple-button-hover-scale","Scale effect applied on hover.","1.05 (scaleHover)"],["--simple-button-hover-shadow","Box shadow applied on hover.","2px 2px 5px #525252 (shadowHover)"],["--simple-button-hover-bg","Background color on hover.","#949494 (toneHover)"],["--simple-button-hover-stroke","Outline stroke on hover.","2px solid currentColor (strokeHover)"]]}};var S=class c{docCode=r(C);docTables=r(f);metaTagsService=p(b);ngOnInit(){this.metaTagsService.setMetaTags({title:"Simple Button \u2022 UUX Angular",description:"UUX Simple Button component documentation",image:"/assets/images/thumbnails/simple-button_thumbnail_1200px.webp",url:"/components/simple-button/documentation",type:"article"})}static \u0275fac=function(d){return new(d||c)};static \u0275cmp=m({type:c,selectors:[["app-simple-button-doc"]],decls:111,vars:24,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],["sectionCode","io"],[3,"tableData"],["sectionCode","sty"],["sectionCode","acc"],["routerLink",".","fragment","simple-button-io"]],template:function(d,n){d&1&&(i(0,"doc-section-title",0),t(1,"p")(2,"em"),e(3,"ng-simple-button"),o(),e(4," is a "),t(5,"em"),e(6,"standalone, reusable and customizable component"),o(),e(7,` for Angular 18, 19 and 20.
`),o(),t(8,"p"),e(9," It is designed to work with "),t(10,"em"),e(11,"signals"),o(),e(12," and Angular "),t(13,"em"),e(14,"zoneless"),o(),e(15,", providing a lightweight, flexible, and accessible simple button. It is also fully compatible with "),t(16,"em"),e(17,"SSR"),o(),e(18,", "),t(19,"em"),e(20,"CSR"),o(),e(21," and "),t(22,"em"),e(23,"prerender"),o(),e(24,`.
`),o(),i(25,"app-divider")(26,"doc-section-title",1),t(27,"p"),e(28,"If you want to install the latest version (currently 20):"),o(),i(29,"app-code-block",2),t(30,"p"),e(31,"Angular 19:"),o(),i(32,"app-code-block",2),t(33,"p"),e(34,"Angular 18:"),o(),i(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),t(38,"p"),e(39,"Using "),t(40,"em"),e(41,"ng-simple-button"),o(),e(42," is easy:"),o(),t(43,"ul")(44,"li"),e(45,"Define the component\u2019s functionality through the "),t(46,"em"),e(47,"(onClick)"),o(),e(48," output."),o(),t(49,"li"),e(50,"Configure its type, shape, hover behavior, and accessibility using inputs.."),o(),t(51,"li"),e(52,"Style it with customizable CSS variables to match your design needs."),o()(),t(53,"p"),e(54,"Here\u2019s a basic usage example:"),o(),i(55,"app-code-block",2)(56,"app-divider")(57,"doc-section-title",4),t(58,"p"),e(59,"As you can see in the example bellow, you can use the "),t(60,"em"),e(61,"(onClick)"),o(),e(62," output to assign the action you want the button to execute."),o(),t(63,"p"),e(64,"You can also access the native "),t(65,"em"),e(66,"MouseEvent"),o(),e(67," if you need to handle event data:"),o(),i(68,"app-code-block",2)(69,"app-code-block",2)(70,"app-divider")(71,"doc-section-title",5),t(72,"p"),e(73,"Here is a list of all input/ouput:"),o(),t(74,"h3"),e(75,"Action Output"),o(),i(76,"app-data-table",6),t(77,"h3"),e(78,"Style & Behavior Inputs"),o(),i(79,"app-data-table",6),t(80,"h3"),e(81,"Accessibility Inputs"),o(),i(82,"app-data-table",6)(83,"app-divider")(84,"doc-section-title",7),t(85,"p"),e(86,"You can easily customize the component\u2019s appearance using the CSS variables listed below."),o(),i(87,"app-code-block",2),t(88,"h3"),e(89,"Layout & Spacing"),o(),i(90,"app-data-table",6),t(91,"h3"),e(92,"Style & Visuals"),o(),i(93,"app-data-table",6),t(94,"h3"),e(95,"Hover Effects"),o(),i(96,"app-data-table",6),t(97,"h3"),e(98,"Styling considerations:"),o(),t(99,"p"),e(100,"You can apply styles to a specific button type as follows:"),o(),i(101,"app-code-block",2),t(102,"p"),e(103,"If you have multiple buttons and need different custom styles, you can also add a class to target them more precisely:"),o(),i(104,"app-code-block",2)(105,"app-divider")(106,"doc-section-title",8),t(107,"p"),e(108,"You can configure the accessibility of the component using the accessibility inputs explained in the inputs/outputs section: "),t(109,"a",9),e(110,"Accessibility Inputs"),o()()),d&2&&(a(29),l("language",n.docCode().installationCode_1.language)("code",n.docCode().installationCode_1.code),a(3),l("language",n.docCode().installationCode_2.language)("code",n.docCode().installationCode_2.code),a(3),l("language",n.docCode().installationCode_3.language)("code",n.docCode().installationCode_3.code),a(20),l("language",n.docCode().overviewCode_1.language)("code",n.docCode().overviewCode_1.code),a(13),l("language",n.docCode().functionalityCode_1.language)("code",n.docCode().functionalityCode_1.code),a(),l("language",n.docCode().functionalityCode_2.language)("code",n.docCode().functionalityCode_2.code),a(7),l("tableData",n.docTables().ioTable_1),a(3),l("tableData",n.docTables().ioTable_2),a(3),l("tableData",n.docTables().ioTable_3),a(5),l("language",n.docCode().stylingCode_1.language)("code",n.docCode().stylingCode_1.code),a(3),l("tableData",n.docTables().styTable_1),a(3),l("tableData",n.docTables().styTable_2),a(3),l("tableData",n.docTables().styTable_3),a(5),l("language",n.docCode().stylingCode_2.language)("code",n.docCode().stylingCode_2.code),a(3),l("language",n.docCode().stylingCode_3.language)("code",n.docCode().stylingCode_3.code))},dependencies:[h,y,v,g,u],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%}"],changeDetection:0})};export{S as SimpleButtonDoc};
