import { Component, OnInit } from '@angular/core';
import { Fruits } from '../../assets/data/data';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public list = Fruits.LIST;

  constructor() { }

  ngOnInit(): void {
    console.log(this.list);

  }

}
