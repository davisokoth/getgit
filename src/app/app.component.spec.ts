import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import { routes } from './app.routes';
import { Component, OnInit } from '@angular/core';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {}

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'app-main', template: ''})
class MainStubComponent  implements OnInit {
  ngOnInit() {
  }
}

@Component({selector: 'app-notification', template: ''})
class NotificationStubComponent  implements OnInit {
  ngOnInit() {
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule.forRoot([])],
      declarations: [
        AppComponent, FooterStubComponent, HeaderStubComponent, MainStubComponent, NotificationStubComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

});
