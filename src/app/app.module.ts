import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Example2Module } from './example-2/example-2.module';
import { Example3Module } from './example-3/example-3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Example2Module, Example3Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
