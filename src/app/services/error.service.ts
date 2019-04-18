import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NotificationHandlerService } from './notification-handler.service';

@Injectable()
export class ErrorService implements NotificationHandlerService {

  private subject: BehaviorSubject<any>;
  notification: any;

  constructor() {
    this.subject = new BehaviorSubject(null);
  }

  public handleError(error: any) {
    this.subject.next(error);
  }

  getNotification(): Observable<any> {
    return this.subject.asObservable();
  }
}
