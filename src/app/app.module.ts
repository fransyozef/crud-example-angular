import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsListItemComponent } from './items/items-list-item/items-list-item.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemAddEditComponent } from './items/item-add-edit/item-add-edit.component';
import { ItemsService } from './items/_services/items.service';

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
    BrowserModule
  ],
  providers: [
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
