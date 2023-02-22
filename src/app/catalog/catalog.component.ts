import { Component, OnInit } from '@angular/core';
import { Fruits } from '../../assets/data/data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public list = Fruits.LIST;

  constructor() { }

  ngOnInit(): void {
  }


}
