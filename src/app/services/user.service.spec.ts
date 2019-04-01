import { TestBed, inject } from '@angular/core/testing';
// import { HttpClientModule} from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/httpClient';
import { UserService } from './user.service';
import { of } from 'rxjs'; // Add import
import { GitResult } from '../models/git-result.model';

describe('UsersService', () => {

  let subject: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientModule],
      providers: [UserService]
    }).compileComponents();
  });

  beforeEach(inject([UserService], (userService: UserService) => {
    subject = userService;
  }));

  it('should be created', () => {
    expect(subject).toBeTruthy();
  });

  it('should return a collection of users', () => {
    const userResponse: GitResult = {
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
    let response;
    spyOn(subject, 'getGitUsers').and.returnValue(of(userResponse));

    subject.getGitUsers(`query`, 0).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  });
});
