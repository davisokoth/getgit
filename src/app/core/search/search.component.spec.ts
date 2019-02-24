import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search.component';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../services/user.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ SearchComponent, UserComponent ],
      providers: [UserService]
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
  it('should emit search results', () => {
    spyOn(component.fetchResults, 'emit');
    component.emitResults([]);
    expect(component.fetchResults.emit).toHaveBeenCalledWith([]);
  });
});
