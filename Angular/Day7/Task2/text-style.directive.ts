import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextStyle]'
})
export class TextStyleDirective {
  @Input()
  appTextStyle: string="";

  constructor(private _element:ElementRef) {
		 
  }

  ngOnInit()
  {
    if(this.appTextStyle == "")
    {
       this.appTextStyle = "Green";
    }
     this._element.nativeElement.style.color=this.appTextStyle;
     this._element.nativeElement.style.backgroundColor="Yellow";
  }

}
