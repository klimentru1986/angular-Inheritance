import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2Component } from './example-2.component';
import { InputComponent } from './controls/input/input.component';
import { SelectComponent } from './controls/select/select.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { SignInComponent } from './forms/sign-in/sign-in.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    Example2Component,
    InputComponent,
    SelectComponent,
    SignInComponent,
    SignUpComponent,
    CheckboxComponent
  ]
})
export class Example2Module {}
