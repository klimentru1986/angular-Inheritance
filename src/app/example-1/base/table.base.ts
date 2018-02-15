import { Input } from '@angular/core';
import { User } from '../models/user.model';

export abstract class TableBase {
  @Input() users: User[];
}
