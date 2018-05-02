import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared-module";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth/auth-service";
import {RecipeService} from "../recipes/recipe-list/recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {RecipeHttpService} from "../shared/recipe-http.service";
import {AuthGuard} from "../auth/auth-guard";

@NgModule(
  {
    declarations : [
      HomeComponent,
      HeaderComponent
    ],
    imports : [
      CommonModule,
      SharedModule,
      AppRoutingModule
    ],
    exports : [
      AppRoutingModule,
      HeaderComponent
    ],
    providers: [ShoppingListService, RecipeService, RecipeHttpService, AuthService]
  }
)
export class CoreModule{

}
