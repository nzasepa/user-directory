import { TestBed, async } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent
      ]
    }).compileComponents();
  }))

  it('should render sidebar component', async(() => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});