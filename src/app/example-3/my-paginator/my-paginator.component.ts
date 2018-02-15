import { Component, OnInit } from '@angular/core';
import { SimplePaginatorComponent } from '../simple-paginator/simple-paginator.component';

@Component({
  selector: 'app-my-paginator',
  templateUrl: './my-paginator.component.html',
  styleUrls: ['./my-paginator.component.css']
})
export class MyPaginatorComponent extends SimplePaginatorComponent {
  constructor() {
    super();
  }

  // nextPage() {
  //   if (this.hasNext()) {
  //     super.nextPage();
  //   }
  // }

  // previousPage() {
  //   if (this.hasPrevious()) {
  //     super.previousPage();
  //   }
  // }

  // hasPrevious(): boolean { return super.hasPrevious() }

  // hasNext(): boolean { return super.hasNext() }
}
