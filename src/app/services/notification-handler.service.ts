import { Injectable } from '@angular/core';

@Injectable()
export abstract class NotificationHandlerService {

  constructor() { }

  abstract handleError(notification: any);

  abstract getNotification();
}
