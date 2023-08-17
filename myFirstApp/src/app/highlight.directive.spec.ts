import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elRefMock: any;
  let rendererMock: any;

  beforeEach(() => {
    // Créez un mock pour ElementRef
    elRefMock = {
      nativeElement: document.createElement('div')
    };

    // Créez un mock pour Renderer2
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle', 'addClass', 'removeClass']);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
