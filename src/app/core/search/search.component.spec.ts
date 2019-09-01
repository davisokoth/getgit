import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchResult } from '../../models/search-result.model';
import { User } from '../../models/user.model';
import { NotificationHandlerService } from '../../services/notification/notification-handler.service';
import { UserService } from '../../services/user/user.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  class UserMockService {
    getGitUsers(search, pageNo) {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent ]
    });
    TestBed.overrideComponent(SearchComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService },
          { provide: NotificationHandlerService, useClass: NotificationHandlerMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a search input field named `searchInput`', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[name=searchInput]')).toBeTruthy();
  }));

  it('should emit search results', () => {
    spyOn(component.fetchResults, 'emit');
    const item = new SearchResult(1, false, [new User({name: 'davisokoth', email: 'www'})]);
    component.emitResults(item);
    expect(component.fetchResults.emit).toHaveBeenCalledWith(item);
  });
});
