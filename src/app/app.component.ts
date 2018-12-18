import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items/_services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-example';

  navToggle: Boolean = false;


  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
    this.itemsService.fetch().subscribe();
  }

  toggleNav() {
    this.navToggle  = !this.navToggle;
  }
}
