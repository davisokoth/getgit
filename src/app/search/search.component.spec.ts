import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchComponent, SearchResultsComponent ]
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
  it('should display `Search Results` component when `Search` button is clicked', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-search-results')).toBeTruthy();
  }));
});
