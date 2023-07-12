import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  categoryList: Category[]=new Array()
  searchCategory:Category|any;
  categoryN:Category|any;
  productList: Product|any;
  number:number|any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((data:any) =>{
      this.searchCategory=data['id'];
      this.productService.searchCategoryProduct(this.searchCategory).subscribe((categoryData:any)=>{
        this.productList = categoryData;
      })
      this.productService.searchCategoryName(this.searchCategory).subscribe((categoryName:any) =>{
        this.categoryN=categoryName;
        this.number=this.productList.length;
      })
    })
    this.obtenerCategorias();
  }
  obtenerCategorias(){
    this.productService.getCategory().subscribe((data: Category[]|any)=>this.categoryList=data)
  }
}
