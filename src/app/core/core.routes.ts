import { Routes } from '@angular/router';
// import { AuthGuard } from '../guards/auth.guard';

import { MainComponent } from './main/main.component';

export const CoreRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'search', component: MainComponent },
];
