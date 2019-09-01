import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user/user.service';
import { UserComponent } from './user.component';
import { Observable } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  class UserMockService {
    getUserFollowers(login) {
      function resultsSubscriber(observer) {
        observer.next({
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
        });
        observer.complete();
        return {unsubscribe() {}};
      }

      return new Observable(resultsSubscriber);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    });
    TestBed.overrideComponent(UserComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render login in a h4 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4')).toBeTruthy();
  }));
  it('should render type in a div', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[name=typeDiv]')).toBeTruthy();
  }));
  it('should render a link to the detail api', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[name=userLink]')).toBeTruthy();
  }));
});
