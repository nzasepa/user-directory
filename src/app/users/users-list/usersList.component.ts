import { Component } from '@angular/core';
import { UsersStore } from '../users.store';
import { UserInterface } from '../../interfaces/user.interface';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent {
  usersStore: UsersStore;

  constructor(usersStore: UsersStore) {
    this.usersStore = usersStore;
  }
}
