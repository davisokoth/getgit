import { Component, OnInit } from '@angular/core';
import { NotificationHandlerService } from 'src/app/services/notification-handler.service';
import { Subscription } from 'rxjs';
import { IPNotification } from '../models/ipnotification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  message: IPNotification;
  subscription$: Subscription;
  constructor(
    private nService: NotificationHandlerService
  ) {
    this.subscription$ = this.nService.getNotification();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
