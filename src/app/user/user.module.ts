import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class UserModule { }
