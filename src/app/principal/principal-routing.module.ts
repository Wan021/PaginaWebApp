import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar/bar.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [
  { path: 'Contactanos', component: BarComponent },
  { path: 'Ayuda', component: AyudaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
