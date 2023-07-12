import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  price=0
  lista=new Array();
  contr:any

  constructor(
    private productService: ProductService,
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.productService.getControl().subscribe((data:any)=>{
      console.log(data)
      this.contr=data[0]
      if(data[0]["control"]==1){
        this.productService.getOneCompra(data[0]["compra"]).subscribe((dat:any)=>{
          this.price=dat.precioTotal
          this.productService.viewProduct().subscribe((prod:any)=>{
            this.productService.getCompras().subscribe((da:any)=>{
              let numero=0
              for(let i of da){
                if(dat.id==i.compra){
                  numero+=1
                  for(let j of prod){
                    if(i.producto==j.id){
                      let l={
                        numero:numero,
                        producto:j.ProductName,
                        imagen:j.productImg,
                        cantidad:i.cantidad,
                        precio:j.price,
                        precioTotal:j.price*i.cantidad
                      }
                      this.lista=this.lista.concat(l)
                    }
                  }
                }
              }
            })
          })
        })
      }
    })
  }
  cancelar(){
    alert("Retorno a compras")
    this.productService.getOneCompra(this.contr.compra).subscribe((i:any)=>{
      let cont={
        cliente: i.cliente,
        id: i.id,
        precioTotal:i.precioTotal,
        terminado: 0
      }
      this.productService.updateCompra(cont.id,cont).subscribe((data:any)=>{
        location.href="products"
      })
    })
  }
  comprar(){
    alert("gracias por comprar :)")
    let cont={
      id: 1,
      control: 0,
      compra: 0
    }
    this.orderService.updatecontrol(1,cont).subscribe()
    location.href=""
  }
}
