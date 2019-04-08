import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/services/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  @Component({selector: 'app-user', template: ''})
  class UserStubComponent {
    @Input() user: User = {
      id: 1,
      login: 'jd',
      node_id: 'poidoifoi-ioi',
      avatar_url: '',
      gravatar_id: '',
      url: 'k iook  i',
      html_url: '',
      followers_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      received_events_url: '',
      type: '',
      score: 0,
      followers: 0
    };
  }

  class UserMockService {
    getGitUsers(search, pageNo) {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStubComponent, UsersComponent ],
    });
    TestBed.overrideComponent(UsersComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
