import { Routes } from '@angular/router';
// import { AuthGuard } from '../guards/auth.guard';

import { SearchComponent } from './search/search.component';

export const CoreRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent },
];
