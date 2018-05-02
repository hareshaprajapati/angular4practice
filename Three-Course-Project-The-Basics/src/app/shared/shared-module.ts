import {NgModule} from "@angular/core";
import {DropdownDirective} from "../dropdown-directive.directive";

@NgModule({
    declarations: [DropdownDirective],
    exports: [DropdownDirective]
  }
)
export class SharedModule{

}
