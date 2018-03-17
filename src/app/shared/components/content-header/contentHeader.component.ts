import { Component } from '@angular/core';

@Component({
  selector: 'ud-content-header-component',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./contentHeader.component.scss']
})
export class ContentHeaderComponent {}
