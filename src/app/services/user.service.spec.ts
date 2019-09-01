import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UsersService', () => {

  let service: UserService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    }); 
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  it('should return an Observable<SearchResult>', () => {
    const userResponse: SearchResult = {
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
    service.getUsers(`query`, 0).subscribe(res => {
      response = res;
      expect(res.total_count).toBe(2);
      expect(res).toEqual(userResponse);
    });
    const req = httpMock.expectOne(`${service.url}search/users?q=query&page=0`);
    expect(req.request.method).toBe('GET');
    req.flush(userResponse);
  });
  */

  afterEach(() => {
    httpMock.verify();
  });
});
