import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MyCarouselComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    DetailsComponent
  ]
})
export class SiteLayoutModule { }
