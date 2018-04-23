import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessStructuralDirectiveDirective {


  @Input() set unless(value: boolean){
    if(!value){
      this.viewRef.createEmbeddedView(this.tempRef);
    }else{
      this.viewRef.clear();
    }
  }

  constructor(private tempRef : TemplateRef<any>,private viewRef : ViewContainerRef) { }

}
