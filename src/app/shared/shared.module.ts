import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { ContentComponent } from './components/content/content.component';
import { UserAvatarComponent } from './components/user-avatar/userAvatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SubscriberComponent,
    ContentComponent,
    UserAvatarComponent
  ],
  exports: [
    SubscriberComponent,
    ContentComponent,
    UserAvatarComponent
  ]
})
export class SharedModule {}
