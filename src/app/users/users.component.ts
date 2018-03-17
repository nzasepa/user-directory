import { Component, OnInit } from '@angular/core';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';

@Component({
  selector: 'ud-users-component',
  template: `
    <router-outlet></router-outlet>
  `
})
export class UsersComponent implements OnInit {
  private _usersStore: UsersStore;
  private _usersService: UsersService;

  constructor(usersStore: UsersStore, usersService: UsersService) {
    this._usersStore = usersStore;
    this._usersService = usersService;
  }

  ngOnInit() {
    this._usersService.fetchUsers()
      .subscribe((users: Array<UserInterface>) => this._usersStore.users$.next(users));
  }
}
