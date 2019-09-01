import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { LoginComponent } from './login.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';

class UserMockService {
  login(user: User) {
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

describe('LoginComponent', () => {
  let component: LoginComponent;
  let form: FormGroup;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    });
    TestBed.overrideComponent(LoginComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    form = component.loginForm;
    fixture.detectChanges();
  });

  it('should have an `email` input', () => {
    expect(form.get('email')).toBeTruthy();
  });

  it('should have an `password` input', () => {
    expect(form.get('password')).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
