import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home/:id',
        component: HomeComponent,
        data: {
            title: 'Thinktecture Todo',
        },
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Thinktecture Todo',
        },
    },
    {
        path: 'info',
        loadChildren: 'modules/info/info.module#InfoModule'
    }
];
