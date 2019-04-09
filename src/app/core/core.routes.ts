import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
// import { AuthGuard } from '../guards/auth.guard';

export const CoreRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'search', component: MainComponent },
];
