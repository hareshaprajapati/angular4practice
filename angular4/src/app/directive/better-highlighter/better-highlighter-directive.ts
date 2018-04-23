import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive(
  {
    selector : '[betterHighlighter]'
  }
)
export class BetterHighlighterDirective implements OnInit{

  @Input() defaultColor : string = 'transparent';


  @Input('betterHighlighter') highlightColor : string = 'red';

  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;


  constructor(private eleRef : ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','red');
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData : Event){
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','red');
    this.bgColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseLeave(eventData : Event){
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.bgColor = this.defaultColor;
  }

}
