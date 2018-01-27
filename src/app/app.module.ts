import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './controls/input/input.component';
import { SelectComponent } from './controls/select/select.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { SignInComponent } from './forms/sign-in/sign-in.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    SignUpComponent,
    SignInComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
