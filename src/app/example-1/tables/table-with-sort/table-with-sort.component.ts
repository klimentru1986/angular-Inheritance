import { Component, OnInit } from '@angular/core';

import { TableComponent } from '../table/table.component';
import { SortTypes } from '../../enums/sort-types.enum';

@Component({
  selector: 'app-table-with-sort',
  templateUrl: './table-with-sort.component.html',
  styleUrls: ['./table-with-sort.component.css']
})
export class TableWithSortComponent extends TableComponent {
  public sortTypes = SortTypes;

  constructor() {
    super();
  }

  sortBy(type: string) {
    this.users = this.users.sort((a, b) => {
      if (a[type] < b[type]) return -1;
      if (a[type] > b[type]) return 1;
      return 0;
    });
  }
}
