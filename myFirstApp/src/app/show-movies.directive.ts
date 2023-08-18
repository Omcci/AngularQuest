import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMovies]',
})
export class ShowMoviesDirective {
  @Input() set appShowMovies(value: boolean) {
    if (value) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(
    private tplRef: TemplateRef<any>,
    private vwRef: ViewContainerRef
  ) {}
}
