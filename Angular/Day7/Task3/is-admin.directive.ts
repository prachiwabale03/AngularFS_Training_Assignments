import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {
  
  


  @Input()
  appIsAdmin:string="";

 adminNames:string[]=["Scott","Smith","Robert"]

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }


    ngOnChanges() {
   
    if(this.adminNames.includes(this.appIsAdmin))
    {
        // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }

}
