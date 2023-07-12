import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productID = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private eliminarService:ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) =>{
      this.productID=data['id'];
      this.eliminarService.deleteProduct(this.productID).subscribe()
      window.alert("Producto Borrado");
      window.location.href=("")
    })
  }


}
