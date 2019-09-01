import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { NotificationHandlerService } from '../../services/notification/notification-handler.service';

class NotificationHandlerMockService {
  getNotification() {
    return [{
      total_count: 2,
      incomplete_results: false,
      items: [
        {
          login: 'janedoe@jd.com',
          email: 'janedoe@jd.com',
          name: 'Jane'
        },
        {
          login: 'janedoe@jd.com',
          email: 'janedoe@jd.com',
          name: 'Jane'
        }
      ]
    }];
  }
}

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ]
    });
    TestBed.overrideComponent(NotificationComponent, {
      set: {
        providers: [
          { provide: NotificationHandlerService, useClass: NotificationHandlerMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
