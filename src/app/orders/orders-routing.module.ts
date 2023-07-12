import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OptionsComponent } from './options/options.component';
import { SignComponent } from './sign/sign.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  { path: '', component: OptionsComponent },
  { path: 'sing-up', component: SignComponent },
  { path: 'registrer', component: ListOrderComponent},
  { path: 'log-out', component: OptionsComponent},
  { path: 'pago', component: PagosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
