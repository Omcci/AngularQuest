import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighlight') isFirst: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver(eventData: Event) {
    if (this.isFirst) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'lightgrey'
      );
      this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }
  }

  @HostListener('mouseout') onMouseOut(eventData: Event) {
    if (this.isFirst) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'background-color',
        'transparent'
      );
      this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
    }
  }
}
