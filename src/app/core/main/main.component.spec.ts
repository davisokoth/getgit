import { Component, Input} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { NotificationHandlerService } from 'src/app/services/notification-handler.service';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  @Component({selector: 'app-search', template: ''})
  class SearchStubComponent {
    @Input() endPoint: string;
  }

  class UserMockService {
    login(user: User) {
      return {
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
      };
    }

    getAllUsers() {
      return {
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
      };
    }
  }

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

  @Component({selector: 'app-users', template: ''})
  class UsersStubComponent {
    @Input() totalCount = 0;
    @Input() users: User[] = [{
      login: 'janedoe@jd.com',
      email: 'janedoe@jd.com',
      name: 'Jane'
    },
    {
      login: 'janedoe@jd.com',
      email: 'janedoe@jd.com',
      name: 'Jane'
    }];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent, UsersStubComponent, SearchStubComponent
      ]
    });
    TestBed.overrideComponent(MainComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService },
          { provide: NotificationHandlerService, useClass: NotificationHandlerMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
