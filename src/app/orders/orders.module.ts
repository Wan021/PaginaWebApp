import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrderComponent } from './list-order/list-order.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
import { OptionsComponent } from './options/options.component';
import { AppModule } from '../app.module';
import { PagosComponent } from './pagos/pagos.component';



@NgModule({
  declarations: [
    ListOrderComponent,
    SignComponent,
    OptionsComponent,
    PagosComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule
  ],
  exports:[
    ListOrderComponent
  ]
})
export class OrdersModule { }
