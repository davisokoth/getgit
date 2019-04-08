import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user.component';
import { User } from '../../shared/models/user.model';
import { UserService } from 'src/app/services/user.service';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  class UserMockService {
    user: User = {
      name: 'yahoo',
      email: 'aholibah@mswesa.kili',
      id: 33
    };
    postUser(user) {
      return null;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ NewUserComponent ]
    });
    TestBed.overrideComponent(NewUserComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserMockService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
