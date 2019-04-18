import { Component, OnInit } from '@angular/core';
import { NotificationHandlerService } from 'src/app/services/notification-handler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent implements OnInit {

  message: any;
  subscription$: Subscription;
  constructor(
    private errorService: NotificationHandlerService
  ) {
    this.subscription$ = this.errorService.getNotification().subscribe(
      data => {
        this.message = data;
      },
      error => {
        this.message = error;
      }
    );
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

}
