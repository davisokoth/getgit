import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NotificationHandlerService } from './notification-handler.service';

@Injectable()
export class ErrorService implements NotificationHandlerService {

  private subject: BehaviorSubject<any>;
  notification: any;
  delay = 5000;

  constructor() {
    this.subject = new BehaviorSubject(null);
  }

  public handleError(error: any) {
    console.log(error);
    this.subject.next(error);
    setTimeout(() => {
      this.subject.next(null);
    }, this.delay);
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }
}
