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
      avatar_url: '',
      url: 'k iook  i',
      type: '',
      score: 0,
      followers: 0,
      profile: '',
      password: 'password'
    };
  }

  class UserMockService {
    getUsers(search, pageNo) {
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
