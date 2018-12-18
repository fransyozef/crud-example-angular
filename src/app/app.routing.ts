import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { ItemsComponent } from './items/items.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

const routes: Routes = [

    { path: 'items', component: ItemsComponent  },
    { path: 'item-edit/:id', component: ItemEditComponent },

    { path: '**', redirectTo: '/items', pathMatch: 'full' },
    { path: '',  redirectTo: '/items', pathMatch: 'full' }, // catch all route

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
