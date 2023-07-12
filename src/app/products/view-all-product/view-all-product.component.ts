import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Product[] = [];
  number: number|any;
  constructor(private productService:ProductService) { }

  ngOnInit(){
    this.productService.viewProduct().subscribe((data:any) => {
      this.productList = data;
      this.number=data.length
    })
  }
  
}

