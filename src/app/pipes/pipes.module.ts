import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortUsersPipe } from './sortUsers.pipe';
import { SearchUsersPipe } from './searchUsers.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SortUsersPipe,
    SearchUsersPipe
  ],
  exports: [
    SortUsersPipe,
    SearchUsersPipe
  ]
})
export class PipesModule {}
