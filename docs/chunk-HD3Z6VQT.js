import{a as u}from"./chunk-NTLMKWZS.js";import{e as c,h as p}from"./chunk-M4U6EHCE.js";import"./chunk-IA3EAMA7.js";import{Fa as m,Ub as g,Vb as h,Wa as d,Xa as o,Ya as t,Za as a,ea as l,rb as e,ua as i}from"./chunk-DJOXELE4.js";var b={installationCode_1:{language:"bash",code:"npm install ng-content-card"},installationCode_2:{language:"bash",code:"npm install ng-content-card@v19-lts"},installationCode_3:{language:"bash",code:"npm install ng-content-card@v18-lts"},overviewCode_1:{language:"html",code:`
      <ng-content-card hover="both">
        <header card-header>
          Header Content
        </header>
        <section card-image>
          <img class="scaleHover" src="assets/images/card/dog_post.png" alt="Dog">
        </section>
        <section card-body>
          Body content
        </section>
        <footer card-footer>
          Footer content
        </footer>
        <div absolute-content>
          Extra content
        </footer>
      </ng-content-card>
    `},funcCode_1:{language:"html",code:`
      <section card-image>
        <img class="scaleHover" src="images/card/dog_post.png" alt="Dog">
      </section>
    `},stylingCode_1:{language:"css",code:`
      ng-content-card {
        max-width: 280px;
        min-height: 400px;
        border: 3px solid white;
        border-radius: 3rem;
      }
    `},stylingCode_2:{language:"css",code:`
      ng-content-card {
        --card-bg: white;
        --card-fg: black;
      }
    `},stylingCode_3:{language:"css",code:`
      ng-content-card [card-header] {
        display: flex;
        align-items: center;
        column-gap: 1rem;
      }

      ng-content-card [card-header] img {
        width: 50px;
        border-radius: 50%;
      }

      ng-content-card [card-footer] {
        display: flex;
        column-gap: 0.5rem;
        justify-content: end;
      }
    `}};var C={funcTable_1:{tableHeader:c.slotsTableHeader,tableRows:[["card-header","Content to show in the header"],["card-image","Main image section"],["card-body","Main body content"],["card-footer","Footer content"],["absolute-content","Extra content with position absolute"]]},ioTable_1:{tableHeader:c.inputTableHeader,tableRows:[["animation","Entrance animation effect: 'translateY', 'fadeIn', 'none'","'translateY'"],["hover","Hover effect: 'scale', 'tone', 'both', 'none'","'scale'"],["shadow","Enable/disable card shadow","true"]]},styTable_1:{tableHeader:c.varTableHeader,tableRows:[["--card-bg","Background color of the entire card","white","General"],["--card-fg","Foreground (text) color of the card","black","General"],["--card-section-padding","Internal padding for each section (header, body, footer)","16px","General"],["--card-image-padding-x","Horizontal padding for the image container","0px","General"],["--card-footer-border-top","Top border of the footer section","0px solid currentColor","General"],["--card-hover-velocity","Transition duration applied on hover",".3s","Hover"],["--card-hover-scale","Scale factor when hovering (if hover='scale')","1.03","Hover"],["--card-hover-bg","Background color on hover (if hover='color' or 'both')","color-mix(in srgb, var(--card-bg) 70%, #999999 30%)","Hover"],["--card-hover-fg","Foreground/text color on hover (if hover='color' or 'both')","var(--card-fg)","Hover"],["--card-animation-delay","Delay before the entrance animation starts","0s","Animation"],["--card-animation-velocity","Duration of the entrance animation","1s","Animation"],["--card-shadow","Box-shadow applied when shadow=true","3px 3px 20px color-mix(in srgb, var(--card-fg) 60%, #999999 40%)","Shadow"],["--card-header-bg","Background color of the header section","transparent","Sections"],["--card-image-bg","Background color of the image section","transparent","Sections"],["--card-body-bg","Background color of the body section","transparent","Sections"],["--card-footer-bg","Background color of the footer section","transparent","Sections"],["--card-header-text-color","Text color inside the header section","inherit","Sections"],["--card-body-text-color","Text color inside the body section","inherit","Sections"],["--card-footer-text-color","Text color inside the footer section","inherit","Sections"]]}};var f=class s{docCode=l(b);docTables=l(C);static \u0275fac=function(r){return new(r||s)};static \u0275cmp=m({type:s,selectors:[["app-content-card-doc"]],decls:105,vars:19,consts:[["sectionCode","intro"],["sectionCode","inst"],[3,"language","code"],["sectionCode","ovw"],["sectionCode","func"],[3,"tableData"],["sectionCode","io"],["sectionCode","sty"],["sectionCode","acc"]],template:function(r,n){r&1&&(a(0,"doc-section-title",0),o(1,"p")(2,"em"),e(3,"ng-content-card"),t(),e(4," is a "),o(5,"em"),e(6,"standalone, reusable and customizable component"),t(),e(7,` for Angular 18, 19 and 20.
`),t(),o(8,"p"),e(9," It is designed to work with "),o(10,"em"),e(11,"signals"),t(),e(12," and Angular "),o(13,"em"),e(14,"zoneless"),t(),e(15,", providing a lightweight, flexible, and accessible content card. It is also fully compatible with "),o(16,"em"),e(17,"SSR"),t(),e(18,", "),o(19,"em"),e(20,"CSR"),t(),e(21," and "),o(22,"em"),e(23,"prerender"),t(),e(24,`.
`),t(),a(25,"app-divider")(26,"doc-section-title",1),o(27,"p"),e(28,"If you want to install the latest version (currently 20):"),t(),a(29,"app-code-block",2),o(30,"p"),e(31,"Angular 19:"),t(),a(32,"app-code-block",2),o(33,"p"),e(34,"Angular 18:"),t(),a(35,"app-code-block",2)(36,"app-divider")(37,"doc-section-title",3),o(38,"p"),e(39,"Using "),o(40,"em"),e(41,"ng-content-card"),t(),e(42," is easy:"),t(),o(43,"ul")(44,"li"),e(45,"You can add only the sections you need (using the projection attribute, such as card-header, card-image, etc.) and the card will render accordingly."),t(),o(46,"li"),e(47,"Configure its style, behavior, and accessibility using inputs.."),t(),o(48,"li"),e(49,"Style it with customizable CSS variables to match your design needs."),t()(),o(50,"p"),e(51,"Here\u2019s a basic usage example:"),t(),a(52,"app-code-block",2)(53,"app-divider")(54,"doc-section-title",4),o(55,"p"),e(56,"As shown in the example above, you can use the [isOpenSignal] input to manage your open state signal."),t(),o(57,"p"),e(58,"As shown in the example below, you just have to add content using the projection attributes: "),o(59,"em"),e(60,"card-header"),t(),e(61,", "),o(62,"em"),e(63,"card-image"),t(),e(64,", "),o(65,"em"),e(66,"card-body"),t(),e(67,", "),o(68,"em"),e(69,"card-footer"),t(),e(70," and "),o(71,"em"),e(72,"absolute-content"),t(),e(73,"."),t(),o(74,"p"),e(75,"You can add only sections needed (e.g only card-image and card-footer)."),t(),a(76,"app-data-table",5),o(77,"p"),e(78,"For the main image inside card-image, you can use the provided scaleHover class for a smooth scale transition when hovering over the card."),t(),a(79,"app-code-block",2)(80,"app-divider")(81,"doc-section-title",6),o(82,"p"),e(83,"Here is a list of all input/ouput:"),t(),o(84,"h3"),e(85,"Functionality Input"),t(),a(86,"app-data-table",5)(87,"app-divider")(88,"doc-section-title",7),o(89,"p"),e(90,"You can customize styles in three different ways:"),t(),o(91,"h3"),e(92,"1. Directly on the host tag"),t(),a(93,"app-code-block",2),o(94,"h3"),e(95,"2. Using CSS variables"),t(),a(96,"app-code-block",2)(97,"app-data-table",5),o(98,"h3"),e(99,"3. Styling sections directly"),t(),a(100,"app-code-block",2)(101,"app-divider")(102,"doc-section-title",8),o(103,"p"),e(104,"Since the content within the card is entered externally, you must manage the accessibility of the entered items yourself, if necessary."),t()),r&2&&(i(29),d("language",n.docCode().installationCode_1.language)("code",n.docCode().installationCode_1.code),i(3),d("language",n.docCode().installationCode_2.language)("code",n.docCode().installationCode_2.code),i(3),d("language",n.docCode().installationCode_3.language)("code",n.docCode().installationCode_3.code),i(17),d("language",n.docCode().overviewCode_1.language)("code",n.docCode().overviewCode_1.code),i(24),d("tableData",n.docTables().funcTable_1),i(3),d("language",n.docCode().funcCode_1.language)("code",n.docCode().funcCode_1.code),i(7),d("tableData",n.docTables().ioTable_1),i(7),d("language",n.docCode().stylingCode_1.language)("code",n.docCode().stylingCode_1.code),i(3),d("language",n.docCode().stylingCode_2.language)("code",n.docCode().stylingCode_2.code),i(),d("tableData",n.docTables().styTable_1),i(3),d("language",n.docCode().stylingCode_3.language)("code",n.docCode().stylingCode_3.code))},dependencies:[p,h,u,g],encapsulation:2,changeDetection:0})};export{f as ContentCardDoc};
