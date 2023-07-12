import { Category } from '../../site-layout/category';
import { Subcategory } from '../../site-layout/subcategory';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pprincipal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class principalComponent implements OnInit {
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
