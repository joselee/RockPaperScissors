import { NgModule } from "@angular/core";
import { RPSComponent } from "./rps.component";
import { RPSService } from "./rps.service";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [RPSComponent],
  exports: [RPSComponent],
  providers: [RPSService]
})
export class RPSModule {}
