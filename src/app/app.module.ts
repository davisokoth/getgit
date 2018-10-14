import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UserDetaiComponent } from './user-detai/user-detai.component';

import { routes } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, SearchComponent, UserComponent, UserDetaiComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
