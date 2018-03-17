import { TestBed, async } from '@angular/core/testing';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContentComponent
      ]
    }).compileComponents();
  }))

  it('should render content component', async(() => {
    const fixture = TestBed.createComponent(ContentComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});