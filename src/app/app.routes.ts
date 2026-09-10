import { Routes } from '@angular/router';
import { Card } from './components/card/card';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'card',
        pathMatch: 'full'
    },
    {
        path: '',
        component: Card
    }
];
