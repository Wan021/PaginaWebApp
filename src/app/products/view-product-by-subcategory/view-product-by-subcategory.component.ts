import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcategory } from 'src/app/site-layout/subcategory';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product-by-subcategory',
  templateUrl: './view-product-by-subcategory.component.html',
  styleUrls: ['./view-product-by-subcategory.component.css']
})
export class ViewProductBySubcategoryComponent implements OnInit {

  searchCategory:Subcategory|any;
  categoryN:Subcategory|any;
  productList: Product|any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((data:any) =>{
      this.searchCategory=data['id'];
      this.productService.searchCategoryProducts(this.searchCategory).subscribe((categoryData:any)=>{
        this.productList = categoryData;
      })
      this.productService.searchCategoryName(this.searchCategory).subscribe((categoryName:any) =>{
        this.categoryN=categoryName;
      })
    })
  }

}
