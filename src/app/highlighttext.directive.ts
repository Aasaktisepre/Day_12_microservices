import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective {

  constructor(obj : ElementRef) 
  { 
    obj.nativeElement.style.backgroundColor = 'yellow'; 
  }

}
