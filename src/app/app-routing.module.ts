import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cuenta', loadChildren:()=>import('./orders/orders.module').then(m => m.OrdersModule)},
  { path: 'details', loadChildren:()=>import('./principal/principal.module').then(m => m.PrincipalModule)},
  { path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
