import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { usersRoutes } from './users.routes';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/usersList.component';
import { SharedModule } from '../shared/shared.module';
import { SingleUserComponent } from './single-user/singleUser.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    SharedModule
  ]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UsersModule,
      providers: [
        UsersStore,
        UsersService
      ]
    }
  }
}
