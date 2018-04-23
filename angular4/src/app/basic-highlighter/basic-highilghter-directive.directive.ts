import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighilghterDirective]'
})
export class BasicHighilghterDirectiveDirective implements OnInit{



  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  constructor(private elementRef : ElementRef) { }

}
