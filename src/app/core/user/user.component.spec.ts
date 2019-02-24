import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ UserComponent ],
      providers: [UserService]
    }).compileComponents();
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
  it('should render followers in a div', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[name=followersDiv]')).toBeTruthy();
  }));
  it('should render avatar in a div', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img[name=avatarImg]')).toBeTruthy();
  }));
  it('should render a link to the detail api', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a[name=userLink]')).toBeTruthy();
  }));
});
