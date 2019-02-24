import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';

describe('UserService', () => {

  let subject: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService]
    }).compileComponents();
  });

  beforeEach(inject([UserService], (userService: UserService) => {
    subject = userService;
  }));

  it('should be created', () => {
    expect(subject).toBeTruthy();
  });
});
