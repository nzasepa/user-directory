import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { SingleUserComponent } from './single-user/singleUser.component';
import { UserNotFoundComponent } from './user-not-found/userNotFound.component';

export const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
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
