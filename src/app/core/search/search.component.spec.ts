import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { GitResult } from '../../shared/models/git-result.model';
import { User } from '../../shared/models/user.model';
import { UserService } from 'src/app/services/user.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

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
      imports: [FormsModule],
      declarations: [ SearchComponent ]
    });
    TestBed.overrideComponent(SearchComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService }
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
    const item = new GitResult(1, false, [new User('davisokoth', 'www')]);
    component.emitResults(item);
    expect(component.fetchResults.emit).toHaveBeenCalledWith(item);
  });
});
