import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UsersStore {
  users$: BehaviorSubject<Array<UserInterface>>

  constructor() {
    this.users$ = new BehaviorSubject<Array<UserInterface>>(new Array())
  }
}
