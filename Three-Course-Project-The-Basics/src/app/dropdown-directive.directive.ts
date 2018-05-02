import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') dropdownOpen : boolean;

  @HostListener('click') clickEvent() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
