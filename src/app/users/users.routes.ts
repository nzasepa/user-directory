import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/usersList.component';
import { UsersComponent } from './users.component';
import { SingleUserComponent } from './single-user/singleUser.component';
import { UserNotFoundComponent } from './user-not-found/userNotFound.component';

export const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UsersListComponent
      },
      {
        path: 'not-found',
        component: UserNotFoundComponent
      },
      {
        path: ':email',
        component: SingleUserComponent
      }
    ]
  }
];
