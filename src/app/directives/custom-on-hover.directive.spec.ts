import { ElementRef, Renderer2 } from '@angular/core';
import { CustomOnHoverDirective } from './custom-on-hover.directive';

describe('CustomOnHoverDirective', () => {
  it('should create an instance', () => {
    const directive = new CustomOnHoverDirective(ElementRef, Renderer2);
    expect(directive).toBeTruthy();
  });
});
