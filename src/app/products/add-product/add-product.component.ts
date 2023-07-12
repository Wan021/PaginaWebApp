
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from 'src/app/site-layout/category';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  valitate=false;
  productList: Product|any;
  ultElemento:any;
  lista:Category|any;
  lista2:any
  subcategory=[{
    id:0
  }]
  subcategory2=[{
    id:0,
    cat:0
  }]
  list=[{
    id:0,
  }]

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe((data:any) => {
      this.productList = data;
      this.productService.getCategory().subscribe((data1: Category[]|any)=>{
        this.lista=data1;
        this.mostrar(this.productList,data1)
      })
    })
  }
  mostrar(productos:any,categoria:any){
    this.ultElemento=productos[productos.length-1];
  }
  AddNewProduct(form:Product|any){
    let newProduct={
      id:this.ultElemento.id+1,
      ProductName: form.value.product_name,
      categoryID:form.value.category_id,
      descriptions:form.value.description,
      price:form.value.Product_price,
      is_avalible:form.value.is_avalible,
      productImg:form.value.productImg,
      rating:form.value.product_rating,
      vendor_name:form.value.vendor_name
    };
    if(newProduct.ProductName.length<5||newProduct.categoryID.length<1||newProduct.descriptions.length<10||newProduct.price==""||newProduct.is_avalible.length<1||newProduct.productImg.length<5||newProduct.vendor_name.length<1||newProduct.rating==""){
      alert("Rellene todos los datos")
    }else{
      this.productService.createProduct(newProduct).subscribe((data:any) =>{
        console.log(data)
      });
      alert("Producto agregado correctamente")
      location.reload();
    }
  }
  cargar(){

  }

}
