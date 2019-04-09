import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    UserComponent, UsersComponent, SearchComponent, MainComponent
  ]
})
export class CoreModule { }
