import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  }
  AddNewCategory(form:any){
    if(form.value.name==""){
      alert("Rellene el dato")
    }else{
      this.productService.getCategory().subscribe((data:any)=>{
        let ultElemento
        for(let i of data){
          ultElemento=i.id
        }
        let nCategory={
          id:ultElemento+1,
          categoryName: form.value.name,
        };
        this.productService.createCategory(nCategory).subscribe();
        alert("Producto agregado correctamente")
        location.href="products/category"
      });
    }
  }
}
