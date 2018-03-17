import { Component, OnInit } from '@angular/core';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { UserInterface } from '../interfaces/user.interface';
import { SubscriberComponent } from '../shared/components/subscriber/subscriber.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ud-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends SubscriberComponent implements OnInit {
  sidebarOpen = false;

  private _usersStore: UsersStore;
  private _usersService: UsersService;

  constructor(router: Router, activatedRoute: ActivatedRoute, usersStore: UsersStore, usersService: UsersService) {
    super();

    this._usersStore = usersStore;
    this._usersService = usersService;

    this.subscriptions.push(
      activatedRoute.params.subscribe((params) => console.log('params', params)),
      usersStore.users$.filter(Boolean).subscribe((users: Array<UserInterface>) => {
        console.log(router);
        console.log(activatedRoute);
        // if (users.length) {
        //   router.navigate(['/users', users[0].email]);
        // } else {
        //   router.navigate(['/users', 'not-found']);
        // }
      })
    );
  }

  ngOnInit() {
    this._usersService.fetchUsers()
      .subscribe((users: Array<UserInterface>) => this._usersStore.users$.next(users));
  }

  onUserSelected($event: boolean): void {
    this.sidebarOpen = false;
  }
}
