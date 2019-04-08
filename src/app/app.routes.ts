import { Routes } from '@angular/router';
import { CoreRoutes } from './core/core.routes';
import { UserRoutes } from './user/user.routes';
import { MainComponent } from './shared/main/main.component';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: 'search', component: MainComponent },
    ...CoreRoutes,
    ...UserRoutes,
];
