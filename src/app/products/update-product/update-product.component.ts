import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productID = 0;
  productDetails:Product|any;
  lista:Category|any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) =>{
      this.productID=data['id'];

      this.productService.viewOneProduct(this.productID).subscribe((productData:Product[]|any) =>{
        this.productDetails = productData;
        this.productService.getCategory().subscribe((data1: Category[]|any)=>{
          this.mostrar(data1);
        })
      })
    })
  }
  mostrar(category:any){
    this.lista=category;
    console.log(this.productDetails)
    console.log(category)
    console.log(this.productDetails[0]['categoryID'])
  }
  UpdateProduct(form: any){
    const updateProduct={
      ProductName: form.value.product_name,
      categoryID:form.value.category_id,
      descriptions:form.value.description,
      price:form.value.Product_price,
      is_avalible:form.value.is_avalible,
      productImg:form.value.productImg,
      rating:form.value.product_rating,
      vendor_name:form.value.vendor_name
    };
    this.productService.updateProduct(this.productID,updateProduct).subscribe((data:any)=>{

    })
    alert("Producto actualizado correctamente")
    location.reload();
  }


}
