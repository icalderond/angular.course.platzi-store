import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // Aqui se usa inyeccion de dependencia
  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'lime';
  }

}
