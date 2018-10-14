import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserDetaiComponent } from './user-detai/user-detai.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent},
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'user/:login', component: UserDetaiComponent }
];
