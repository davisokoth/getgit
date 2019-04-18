import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import {SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ErrorService } from './services/error.service';
import { NotificationHandlerService } from './services/notification-handler.service';

@NgModule({
  imports: [ BrowserModule, CoreModule, UserModule, RouterModule.forRoot(routes), SharedModule],
  declarations: [ AppComponent ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NotificationHandlerService, useClass: ErrorService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
