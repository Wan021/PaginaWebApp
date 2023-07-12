import { Component, NgModule, OnInit } from '@angular/core';
import { principalComponent } from './principal/principal.component';
import { ProductService } from './product.service';

@Component({
  selector: 'pr',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class PrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
