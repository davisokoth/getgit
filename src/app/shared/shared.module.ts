import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorNotificationComponent } from './error-notification/error-notification.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, ErrorNotificationComponent],
  exports: [
    FormsModule, ReactiveFormsModule, HttpClientModule, ErrorNotificationComponent, HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
