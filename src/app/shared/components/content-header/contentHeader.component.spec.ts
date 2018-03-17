import { TestBed, async } from '@angular/core/testing';
import { ContentHeaderComponent } from './contentHeader.component';

describe('ContentHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentHeaderComponent
      ]
    }).compileComponents();
  }))

  it('should render content header component', async(() => {
    const fixture = TestBed.createComponent(ContentHeaderComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});