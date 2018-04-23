import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from "@angular/forms";
import { BasicHighilghterDirectiveDirective } from './directive/basic-highlighter/basic-highilghter-directive.directive';
import {BetterHighlighterDirective} from "./directive/better-highlighter/better-highlighter-directive";
import { UnlessStructuralDirectiveDirective } from './directive/unless-structural-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighilghterDirectiveDirective,
    BetterHighlighterDirective,
    UnlessStructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
