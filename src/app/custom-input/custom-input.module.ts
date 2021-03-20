import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CustomInputComponent } from "./custom-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CustomInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  exports: [CustomInputComponent],
})
export class CustomInputModule {}
