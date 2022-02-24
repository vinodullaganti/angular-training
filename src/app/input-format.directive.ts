import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  
  element:ElementRef;

  @HostListener('blur') onBlur() {
    let value =  this.element.nativeElement.value;
    this.element.nativeElement.value = value.toLowerCase();
    console.log("on blur");
  }

  constructor(el: ElementRef) { 
    this.element = el;
  }

}
