import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, CoreModule, RouterModule.forRoot(routes)], // FormsModule, SharedModule],
  declarations: [ HeaderComponent, FooterComponent, AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
