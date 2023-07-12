import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Category } from '../../site-layout/category';
import { Subcategory } from '../../site-layout/subcategory';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  lista:any
  constructor(private productService:ProductService) { }
  categoryList: Category[]=new Array()
  subcategoryList: Subcategory[]=new Array()

  obtenerCategorias(){
    this.productService.getCategory().subscribe((data: Category[]|any)=>this.categoryList=data)
    this.productService.getSubCategory().subscribe((datas: Subcategory[]|any)=>{this.subcategoryList=datas})
  }
  ngOnInit(): void {
    this.obtenerCategorias();
    this.productService.getCategory().subscribe((data:any)=>{
      this.lista=data
    })
  }
  borrar(id:any){
    this.productService.deletecategory(id).subscribe()
    alert("Categoria borrada correctamente")
    location.reload()
  }
  nuevo(){
    location.href="add-category"
  }
  actualizar(data:any){
    location.href="up-category/"+data
  }
}
