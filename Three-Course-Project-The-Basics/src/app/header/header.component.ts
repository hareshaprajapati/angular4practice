import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl : './header.component.html'
  }
)
export class HeaderComponent {

  @Output() eventEmmiter = new EventEmitter<string>();

  onClick(feature : string){
    this.eventEmmiter.emit(feature);

  }

}
