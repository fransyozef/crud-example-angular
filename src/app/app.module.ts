import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsListItemComponent } from './items/items-list-item/items-list-item.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemAddEditComponent } from './items/item-add-edit/item-add-edit.component';
import { ItemsService } from './items/_services/items.service';
import { FakeBackendInterceptor } from './_shared/fakebackend';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsListItemComponent,
    ItemEditComponent,
    ItemAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
