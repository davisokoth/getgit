import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './app.routes';
import { CoreModule } from './core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, CoreModule, RouterModule.forRoot(routes)],
      declarations: [
        AppComponent, HeaderComponent, FooterComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    // app = fixture.debugElement.componentInstance;
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'getgit'`, async(() => {
    console.log(app.title);
    expect(app.title).toEqual('getgit');
  }));
  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Get git users');
  }));
});
