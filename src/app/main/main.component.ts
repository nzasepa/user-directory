import { Component, Input } from '@angular/core';

@Component({
  selector: 'ud-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Input() sidebarOpen = false;
}
