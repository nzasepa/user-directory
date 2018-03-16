import { Component } from '@angular/core';

@Component({
  selector: 'content-component',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {}
