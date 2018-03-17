import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'user-not-found',
  templateUrl: './userNotFound.component.html',
  styleUrls: ['./userNotFound.component.scss']
})
export class UserNotFoundComponent {
  private _titleService: Title;

  constructor(titleService: Title) {
    this._titleService = titleService;
  }

  ngOnInit() {
    this._titleService.setTitle('User Not Found | User directory');
  }
}
