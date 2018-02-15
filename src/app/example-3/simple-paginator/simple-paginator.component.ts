import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-paginator',
  templateUrl: './simple-paginator.component.html',
  styleUrls: ['./simple-paginator.component.css']
})
export class SimplePaginatorComponent {
  constructor() {}

  @Input() pageCount: number;

  @Input() page: number;

  @Output() pageChanged = new EventEmitter<number>();

  nextPage() {
    this.page++;
    this.pageChanged.emit(this.page);
  }

  previousPage() {
    this.page--;
    this.pageChanged.emit(this.page);
  }

  hasPrevious(): boolean {
    return +this.page > 1;
  }

  hasNext(): boolean {
    return +this.page < +this.pageCount;
  }
}
