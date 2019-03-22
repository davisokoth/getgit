import { Routes } from '@angular/router';
import { CoreRoutes } from './core/core.routes';
import { UserRoutes } from './user/user.routes';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    ...CoreRoutes,
    ...UserRoutes,
];
