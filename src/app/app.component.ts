import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ud-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _titleService: Title;

  constructor(titleService: Title) {
    this._titleService = titleService;
  }

  ngOnInit() {
    this._titleService.setTitle('User directory');
  }
}
