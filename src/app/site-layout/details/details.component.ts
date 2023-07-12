import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  list:any

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe((data:any)=>{
      this.list=data
    })
  }

}
