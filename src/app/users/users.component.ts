import { Component, OnInit } from '@angular/core';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';

@Component({
  selector: 'ud-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  sidebarOpen = false;

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

  onUserSelected($event: boolean): void {
    this.sidebarOpen = false;
  }

  onOpenSidebar($event: MouseEvent): void {
    $event.preventDefault();
    this.sidebarOpen = true;
  }
}
