import { Component, Input} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { User } from '../../shared/models/user.model';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  @Component({selector: 'app-search', template: ''})
  class SearchStubComponent {
    @Input() endPoint: string;
  }
  @Component({selector: 'app-users', template: ''})
  class UsersStubComponent {
    @Input() totalCount = 0;
    @Input() users: User[] = [{
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
    }];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent, UsersStubComponent, SearchStubComponent
      ]
    })
    .compileComponents();
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
