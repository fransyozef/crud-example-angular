import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [

    { path: '**', redirectTo: '/items', pathMatch: 'full' },
    { path: '',  redirectTo: '/items', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
