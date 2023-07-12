import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductBySubcategoryComponent } from './view-product-by-subcategory/view-product-by-subcategory.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './view-product/carrito/carrito.component';
import { ProductoCComponent } from './producto-c/producto-c.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CatComponent } from './cat/cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { principalComponent } from './principal/principal.component';
import { PrComponent } from './product.component';
import { ChunkPipe } from './view-all-product/chunk.pipe';


@NgModule({
  declarations: [
    ChunkPipe,
    PrComponent,
    AddProductComponent,
    ViewProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductComponent,
    ViewProductByCategoryComponent,
    ViewProductBySubcategoryComponent,
    CarritoComponent,
    ProductoCComponent,
    AddCategoryComponent,
    CatComponent,
    UpdateCatComponent,
    principalComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  ],
  exports:[
    ProductoCComponent
  ]
})
export class ProductsModule { }
