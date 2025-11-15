import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, input, OnChanges, OnInit, PLATFORM_ID, signal, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import dedent from 'dedent';

hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('bash', bash);

@Component({
  selector: 'app-code-block',
  imports: [],
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeBlock implements AfterViewInit, OnChanges, OnInit {

  language = input<string>('typescript');
  code = input<string | null>(null);

  dedentedCode = signal<string>('');

  dedentCode(){
    // return dedent(this.code())
    if(this.code()){
      this.dedentedCode.set(dedent(this.code()!));
    }

  }

  private el = inject(ElementRef);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  copied = signal<'copied' | 'copy error' | null>(null);

  ngAfterViewInit(): void {
    this.highlight();
  };

  ngOnInit(): void {
    this.dedentCode();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && !changes['code'].firstChange || changes['dedentedCode']) {
      this.dedentCode();
      this.highlight();
    }
  };

  private highlight() {
    if (!this.isBrowser) return;

    const codeEl = this.el.nativeElement.querySelector('code');
    delete codeEl.dataset.highlighted;
    codeEl.classList.remove('hljs');

    codeEl.textContent = this.dedentedCode();
    hljs.highlightElement(codeEl);
  };

  copyCode() {
    if (!this.isBrowser) return; // Evita errores en SSR

    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.dedentedCode())
        .then(() => {
          this.copied.set('copied');
          setTimeout(() => {
            this.copied.set(null);
          }, 3000)
        })
        .catch(err => {
          this.copied.set('copy error');
          setTimeout(() => {
            this.copied.set(null);
          }, 3000)
          console.error('Copy error:', err)
        });
    } else {
      console.warn('Clipboard API not supported in this browser');
    }
  }
}
