import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTituloGrande]',
  standalone: true
})
export class TituloGrandeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
