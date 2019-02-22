import { Routes } from '@angular/router';
import { CoreRoutes } from './core/core.routes';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    ...CoreRoutes,
];
