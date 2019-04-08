import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, CoreModule, UserModule, RouterModule.forRoot(routes)],
  declarations: [ HeaderComponent, FooterComponent, AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
