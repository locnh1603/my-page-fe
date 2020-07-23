import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SafeSubscription {
  private subscriptions: Subscription[] = [];
  constructor() { }

  static createInstance(): SafeSubscription {
    return new SafeSubscription();
  }

  set sub(sub: Subscription) {
    if (!sub) { return; }
    this.subscriptions.push(sub);
  }

  set subs(subs: Subscription[]) {
    if (!subs.length) { return; }
    this.subscriptions.push(...subs);
  }

  unsubscribeAll() {
    this.subscriptions.forEach(element => !element.closed && element.unsubscribe() );
  }

}
