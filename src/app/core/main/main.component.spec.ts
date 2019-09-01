import { Component, Input} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../models/user.model';
import { NotificationHandlerService } from '../../services/notification/notification-handler.service';
import { UserService } from '../../services/user/user.service';
import { MainComponent } from './main.component';
import { of } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let compiled;

  @Component({selector: 'app-loading', template: ''})
  class LoadingStubComponent { }

  @Component({selector: 'app-search', template: ''})
  class SearchStubComponent {
    @Input() endPoint: string;
  }

  class UserMockService {
    getAllUsers() {
      return of([
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
      ]);
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
        LoadingStubComponent, MainComponent, SearchStubComponent, UsersStubComponent
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
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a search bar', () => {
    expect(compiled.querySelector('app-search')).not.toBeNull();
  });

  it('should display users on page load', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    expect(compiled.querySelector('app-users')).toBeTruthy();
  });
});
