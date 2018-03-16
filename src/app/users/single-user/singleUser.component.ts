import { Component } from '@angular/core';
import { SubscriberComponent } from '../../shared/components/subscriber/subscriber.component';
import { ActivatedRoute } from '@angular/router';
import { UsersStore } from '../users.store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'single-user',
  templateUrl: './singleUser.component.html',
  styleUrls: ['./singleUser.component.scss']
})
export class SingleUserComponent extends SubscriberComponent {
  user: UserInterface

  constructor(activatedRoute: ActivatedRoute, usersStore: UsersStore) {
    super();

    this.subscriptions.push(
      Observable.combineLatest(
        activatedRoute.params.map((param) => param.email),
        usersStore.users$
      ).subscribe(([userEmail, users]) => this._setUser(userEmail, users))
    )
  }

  private _setUser(userEmail: string, users: Array<UserInterface>): void {
    this.user = users.filter((user: UserInterface) => user.email === userEmail)[0];
  }
}
