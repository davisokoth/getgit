import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { UserComponent } from '../user/user.component';
import { UserDetaiComponent } from './user-detai.component';
import { routes } from '../app.routes';

describe('UserDetaiComponent', () => {
  let component: UserDetaiComponent;
  let fixture: ComponentFixture<UserDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
      declarations: [ UserComponent, UserDetaiComponent, SearchComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetaiComponent);
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
});
