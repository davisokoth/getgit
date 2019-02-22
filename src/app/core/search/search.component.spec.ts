import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search.component';
import { UserComponent } from '../user/user.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ SearchComponent, UserComponent ]
    })
    .compileComponents();
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
  it('should create a `Search` button named `searchButton`', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[name=searchButton]')).toBeTruthy();
  }));
  it('should display results in a paginated format', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[name=pagination]')).toBeTruthy();
  }));
  it('should display total number of results in a span', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span[name=totalCount]')).toBeTruthy();
  }));
});
