import { Component, OnInit } from '@angular/core';
import { UsersStore } from '../users.store';
import { UserInterface } from '../../interfaces/user.interface';
import 'rxjs/add/operator/filter';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent implements OnInit {
  usersStore: UsersStore;

  private _titleService: Title;

  constructor(titleService: Title, usersStore: UsersStore) {
    this.usersStore = usersStore;

    this._titleService = titleService;
  }

  ngOnInit() {
    this._titleService.setTitle('Users list | User directory');
  }
}
