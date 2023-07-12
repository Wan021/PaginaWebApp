import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './bar/bar.component';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [
    BarComponent,
    AyudaComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    PrincipalRoutingModule,
  ],
  exports:[
  ]
})
export class PrincipalModule { }
