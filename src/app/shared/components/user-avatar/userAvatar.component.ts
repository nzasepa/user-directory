import { Component, Input } from "@angular/core";

@Component({
  selector: 'user-avatar',
  templateUrl: './userAvatar.component.html',
  styleUrls: ['./userAvatar.component.scss']
})
export class UserAvatarComponent {
  @Input() avatarUrl: string;
  @Input() isActive: boolean;
}
