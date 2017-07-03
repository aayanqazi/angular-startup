import { Directive ,ElementRef , Renderer} from '@angular/core';

@Directive({
  selector: '[appCcCardColor]'
})
export class CcCardColorDirective {

  constructor(private el:ElementRef , private renderer:Renderer) {
    renderer.setElementStyle(el.nativeElement,'backgroundColor','grey');
    renderer.setElementStyle(el.nativeElement,'color','white');

  }

}
