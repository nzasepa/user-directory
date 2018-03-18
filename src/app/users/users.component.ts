import { Component, OnInit } from '@angular/core';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';
import { SubscriberComponent } from '../shared/components/subscriber/subscriber.component';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ud-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends SubscriberComponent implements OnInit {
  sidebarOpen = false;

  private _usersStore: UsersStore;
  private _usersService: UsersService;

  constructor(router: Router, usersStore: UsersStore, usersService: UsersService) {
    super();

    this._usersStore = usersStore;
    this._usersService = usersService;

    this.subscriptions.push(
      /*
       * When on /users route, wait for users to fetch and redirect to first available user
       **/
      Observable.combineLatest(
        router.events.filter((event: RouterEvent) => event instanceof NavigationEnd),
        usersStore.users$
      ).filter((values) => values.every(Boolean))
      .subscribe(([navigationEnd, users]: [NavigationEnd, Array<UserInterface>]) => {
        if (navigationEnd.urlAfterRedirects === '/users') {
          if (!users[0]) {
            return router.navigate(['/users', 'not-found']);
          }

          router.navigate(['/users', users[0].email]);
        }
      })
    );
  }

  ngOnInit() {
    this.subscriptions.push(
      this._usersService.fetchUsers()
        .subscribe((users: Array<UserInterface>) => this._usersStore.users$.next(users))
    );
  }

  onUserSelected($event: boolean): void {
    this.sidebarOpen = false;
  }

  onOpenSidebar($event: MouseEvent): void {
    $event.preventDefault();
    this.sidebarOpen = true;
  }
}
