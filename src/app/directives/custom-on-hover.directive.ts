import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomOnHover]',
  standalone: true
})
export class CustomOnHoverDirective {
@Input('appCustomOnHover') onHover: string = 'blue'
  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouceEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.onHover);
  };
  @HostListener('mouseleave') onMouceLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
