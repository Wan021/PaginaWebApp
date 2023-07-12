import { Category } from '../category';
import { Subcategory } from '../subcategory';
import { ProductService } from '../../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category[]=new Array()
  subcategoryList: Subcategory[]=new Array()
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(){
    this.obtenerCategorias();
  }
  obtenerCategorias(){
    this.productService.getCategory().subscribe((data: Category[]|any)=>this.categoryList=data)
    this.productService.getSubCategory().subscribe((datas: Subcategory[]|any)=>{this.subcategoryList=datas})
  }
}
