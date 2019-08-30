import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

export const CoreRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: MainComponent },
];
