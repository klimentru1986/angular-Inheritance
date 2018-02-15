import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example3Component } from './example-3.component';
import { SimplePaginatorComponent } from './simple-paginator/simple-paginator.component';
import { MyPaginatorComponent } from './my-paginator/my-paginator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Example3Component, SimplePaginatorComponent, MyPaginatorComponent]
})
export class Example3Module { }
