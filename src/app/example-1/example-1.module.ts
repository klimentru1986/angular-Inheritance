import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Example1Component } from './example-1.component';
import { UsersService } from './services/users.service';
import { TableComponent } from './tables/table/table.component';
import { TableWithSortComponent } from './tables/table-with-sort/table-with-sort.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [Example1Component, TableComponent, TableWithSortComponent],
  providers: [UsersService]
})
export class Example1Module {}
