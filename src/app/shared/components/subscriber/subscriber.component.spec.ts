import { TestBed, async } from '@angular/core/testing';
import { SubscriberComponent } from './subscriber.component';

describe('SubscriberComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubscriberComponent
      ]
    }).compileComponents();
  }))

  it('should render subscriber component', async(() => {
    const fixture = TestBed.createComponent(SubscriberComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))

  it('should have subscriptions array', async(() => {
    const fixture = TestBed.createComponent(SubscriberComponent);
    const component = fixture.debugElement.componentInstance;

    expect(Array.isArray(component.subscriptions)).toBeTruthy();
  }))
});