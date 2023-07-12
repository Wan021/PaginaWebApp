import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  productID:any
  list:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) =>{
      this.productID=data['id'];
      this.productService.getOneCategory(data['id']).subscribe((data1:any)=>{
        this.list=data1
      })
    })
  }
  UpdateCategory(form:any){
    if(form.value.name==""){
      alert("Rellene el dato")
    }else{
      let j={
        id:this.list.id,
        categoryName:form.value.name
      }
      this.productService.updateCategory(this.productID,j).subscribe()
      alert("Actualizado Correctamente")
      location.href="products/category"
    }
  }
}
