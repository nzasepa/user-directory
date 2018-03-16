import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/usersList.component';
import { UsersComponent } from './users.component';

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
      }
    ]
  }
];
