import { Component } from '@angular/core';

@Component({
  selector: 'content-header-component',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./contentHeader.component.scss']
})
export class ContentHeaderComponent {}
