import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/usersList.component';

export const usersRoutes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersListComponent
      }
    ]
  }
];
