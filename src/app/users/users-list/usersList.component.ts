import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersStore } from '../users.store';
import { UserInterface } from '../../interfaces/user.interface';
import 'rxjs/add/operator/filter';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ud-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.scss']
})
export class UsersListComponent implements OnInit {
  @Output() userSelected: EventEmitter<boolean>;

  listControls: FormGroup;
  usersStore: UsersStore;

  private _titleService: Title;
  private _formBuilder: FormBuilder;

  constructor(titleService: Title, formBuilder: FormBuilder, usersStore: UsersStore) {
    this.userSelected = new EventEmitter<boolean>();
    this.usersStore = usersStore;

    this._titleService = titleService;
    this._formBuilder = formBuilder;
  }

  ngOnInit() {
    this._titleService.setTitle('Users list | User directory');
    this._initListControls();
  }

  get searchValue(): string {
    return this.listControls.get('search').value;
  }

  onUserSelected($event: MouseEvent): void {
    $event.preventDefault();
    this.userSelected.emit(true);
  }

  private _initListControls(): void {
    this.listControls = this._formBuilder.group({
      search: ['']
    });
  }
}
