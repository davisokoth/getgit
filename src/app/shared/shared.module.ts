import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, NotificationComponent, LoadingComponent],
  exports: [
    FontAwesomeModule, FormsModule, ReactiveFormsModule, HttpClientModule, NotificationComponent, HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
