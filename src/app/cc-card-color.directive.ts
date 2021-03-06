import { Directive ,ElementRef ,Input, Renderer,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appCcCardColor]'
})
export class CcCardColorDirective {
  @Input('appCcCardColor') config:any = {
    querySelector:''
  };
  @HostBinding('class.card-outline-primary') private isHovering = false;
  constructor(private el:ElementRef , private renderer:Renderer) {
    // renderer.setElementStyle(el.nativeElement,'backgroundColor','grey');
    // renderer.setElementStyle(el.nativeElement,'color','white');
  }

  @HostListener('mouseover') onMouseOver(){
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part,'display','block');
    this.isHovering = true;
  }

    @HostListener('mouseleave') onMouseLeave(){
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part,'display','none');
    this.isHovering = false;
  }
}
