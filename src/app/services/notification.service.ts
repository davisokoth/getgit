import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NotificationHandlerService } from './notification-handler.service';
import { IPNotification } from '../shared/models/ipnotification';

@Injectable()
export class NotificationService implements NotificationHandlerService {

  private subject: BehaviorSubject<IPNotification>;
  notification: IPNotification;
  delay = 5000;

  constructor() {
    this.subject = new BehaviorSubject(null);
  }

  public handleNotification(title: string, message: string, severity: number = 3) {
    const notification = new IPNotification(title, message, severity);
    this.doNotification(notification);
  }

  getNotification(): Observable<IPNotification> {
    return this.subject.asObservable();
  }

  private doNotification(notification: IPNotification) {
    this.subject.next(notification);
    setTimeout(() => {
      this.subject.next(null);
    }, this.delay);
  }
}
