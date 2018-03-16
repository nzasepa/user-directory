import { Component } from '@angular/core';
import { SubscriberComponent } from '../../shared/components/subscriber/subscriber.component';
import { ActivatedRoute } from '@angular/router';
import { UsersStore } from '../users.store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import { UserInterface } from '../../interfaces/user.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'single-user',
  templateUrl: './singleUser.component.html',
  styleUrls: ['./singleUser.component.scss']
})
export class SingleUserComponent extends SubscriberComponent {
  user: UserInterface

  private _titleService: Title;

  constructor(titleService: Title, activatedRoute: ActivatedRoute, usersStore: UsersStore) {
    super();

    this._titleService = titleService;

    this.subscriptions.push(
      Observable.combineLatest(
        activatedRoute.params.map((param) => param.email),
        usersStore.users$
      ).subscribe(([userEmail, users]) => this._setUser(userEmail, users))
    )
  }

  private _setUser(userEmail: string, users: Array<UserInterface>): void {
    this.user = users.filter((user: UserInterface) => user.email === userEmail)[0];

    if (this.user) {
      this._titleService.setTitle(`${this.user.name.first} ${this.user.name.last} | User directory`);
    } else {
      this._titleService.setTitle(`Not found | User directory`);
    }
  }
}
