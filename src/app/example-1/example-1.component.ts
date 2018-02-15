import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-example-1',
  templateUrl: './example-1.component.html',
  styleUrls: ['./example-1.component.css']
})
export class Example1Component implements OnInit {
  public users: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
