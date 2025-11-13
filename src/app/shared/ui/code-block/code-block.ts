import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

@Component({
  selector: 'app-code-block',
  imports: [],
  template: `
    <pre><code [class]="'language-' + language()">{{code()}}</code></pre>
    <button (click)="copyCode()">Copy</button>
  `,
  styleUrl: './code-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlock implements AfterViewInit {

  language = input<string>('typescript');
  code = input<string>('');

  private el = inject(ElementRef);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngAfterViewInit(): void {
    if(this.isBrowser){
      const codeEl = this.el.nativeElement.querySelector('code');
      hljs.highlightElement(codeEl);
    }
  };

  copyCode() {
    if (!this.isBrowser) return; // Evita errores en SSR

    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.code())
        .then(() => console.log('Código copiado al portapapeles'))
        .catch(err => console.error('Error copiando:', err));
    } else {
      console.warn('Clipboard API no soportada en este navegador');
    }
  }
}
