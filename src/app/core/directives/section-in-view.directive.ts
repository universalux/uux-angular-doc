import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy, output } from '@angular/core';

@Directive({
  selector: '[sectionInView]'
})
export class SectionInViewDirective implements AfterViewInit, OnDestroy {

  // @Output() visibleChange = new EventEmitter<boolean>();
  visibleChange = output<boolean>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => this.visibleChange.emit(entry.isIntersecting),
      {
        threshold: 0,               // dispara cuando empieza a entrar
        rootMargin: '-10% 0px -70% 0px' // top y bottom recortados
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
