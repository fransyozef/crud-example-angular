import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ItemModel } from './_models/item.model';
import { ItemsService } from './_services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

}
