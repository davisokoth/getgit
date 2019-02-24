import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    MainComponent, UserComponent, UsersComponent, SearchComponent
  ]
})
export class CoreModule { }
