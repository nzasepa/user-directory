import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  template: ''
})
export class SubscriberComponent implements OnDestroy {
  protected subscriptions: Array<Subscription>;

  constructor() {
    this.subscriptions = new Array<Subscription>();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
