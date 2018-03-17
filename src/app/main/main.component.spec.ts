import { TestBed, async } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('MainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        SidebarComponent
      ]
    }).compileComponents();
  }))

  it('should render main component', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});