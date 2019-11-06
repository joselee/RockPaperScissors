import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RPSModule } from "./components/rps/rps.module";
import { DecorationsComponent } from "./components/decorations/decorations.component";

@NgModule({
  imports: [BrowserModule, RPSModule],
  declarations: [AppComponent, DecorationsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
