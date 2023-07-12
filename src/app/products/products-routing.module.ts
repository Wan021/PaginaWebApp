import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductBySubcategoryComponent } from './view-product-by-subcategory/view-product-by-subcategory.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CatComponent } from './cat/cat.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { PrComponent } from './product.component';

const routes: Routes = [
  { path: '', component: PrComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'view-product', component: ViewProductComponent},
  //{ path: 'list-product', component: ViewAllProductComponent},
  { path: 'category/:id', component: ViewProductByCategoryComponent},
  { path: 'subcategory/:id', component: ViewProductBySubcategoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'view-product/:id', component: ViewProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent},
  { path: 'category', component: CatComponent},
  { path: 'add-category', component: AddCategoryComponent},
  { path: 'up-category/:id', component: UpdateCatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
