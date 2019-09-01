import { Injectable } from '@angular/core';

@Injectable()
export abstract class NotificationHandlerService {

  constructor() { }

  abstract handleNotification(title: string, message: string, severity?: number);

  abstract getNotification();
}
