import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ServerElementModel} from "./server-element.model";
import {ElementSchemaRegistry} from "@angular/compiler";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges,DoCheck
    ,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
  @Input('serverElement') serverElement : ServerElementModel;
  @Input() name:string;

  @ViewChild('heading') heading : ElementRef;
  @ContentChild('myParagraph') myParagraph : ElementRef

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges "  );
    console.log(changes);
  }

  constructor() {
    console.log('constructor called');
  }


  ngOnInit() {
    console.log('ngOnInit called');
    console.log('heading value ' + this.heading.nativeElement.textContent);
    console.log('myParagraph value ' + this.myParagraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('heading value ' + this.heading.nativeElement.textContent);
    console.log('myParagraph value ' + this.myParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('heading value ' + this.heading.nativeElement.textContent);
    console.log('myParagraph value ' + this.myParagraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
