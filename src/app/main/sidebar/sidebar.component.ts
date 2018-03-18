import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ud-sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() set sidebarOpen(value: boolean) {
    this._sidebarOpen = value;
  }

  private _sidebarOpen: boolean;

  @HostBinding('class.open') get open(): boolean {
    return this._sidebarOpen;
  }
}
