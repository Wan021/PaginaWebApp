import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders/orders.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  control:any
  compra:any
  compras:any
  usuario:any
  product:any
  price:number|any

  constructor(
    private productService:ProductService,
    private orderService:OrdersService
  ) { }

  ngOnInit(): void {
    this.productService.getControl().subscribe((viewData:any) =>{
      this.control=viewData[0]["control"];
    })
    this.productService.getCompra().subscribe((viewData:any) =>{
      this.compra=viewData;
    })
    this.productService.getCompras().subscribe((viewD:any) =>{
      this.compras=viewD;
    })
    this.productService.viewProduct().subscribe((view:any) =>{
      this.product=view;
    })
    this.orderService.getcuentas().subscribe((viewData:any) =>{
      this.usuario=viewData;
    })
    setTimeout(() => {},100);
  }
  precioTotal(){
    this.productService.getCompra().subscribe((viewData:any) =>{
      this.compra=viewData;
      this.productService.getCompras().subscribe((viewD:any) =>{
        this.compras=viewD;
        this.productService.viewProduct().subscribe((view:any) =>{
          this.product=view;
          this.price=0;
          for(let k of viewData){
            for(let i of viewD){
              for(let j of view){
                if(i.producto==j.id&&i.compra==k.id&&k.terminado==0){
                  this.price+=j.price*i.cantidad
                }
              }
            }
          }
          for(let i of viewData){
            if(i.terminado==0){
              let prod={
                id: i.id,
                cliente: i.cliente,
                precioTotal: this.price,
                terminado: i.terminado
              }
              this.productService.updateCompra(i.id,prod).subscribe((data:any)=>{
                this.ngOnInit();
              })
            }
          }
        })
      })
    })
  }
  add(compo:any){
    let prod={
      id: compo.id,
      producto: compo.producto,
      compra: compo.compra,
      cantidad: compo.cantidad+1,
    }
    this.productService.setCompras(compo.id,prod).subscribe((data:any)=>{
    })
    this.precioTotal();
  }
  less(compo:any){
    let prod={
      id: compo.id,
      producto: compo.producto,
      compra: compo.compra,
      cantidad: compo.cantidad-1,
    }
    if(prod.cantidad==0){
      this.productService.deleteCompras(compo.id).subscribe((data:any)=>{})
      this.productService.getCompras().subscribe((viewD:any) =>{
        let n=0
        for(let i of viewD){
          if(i.compra==prod.compra){
            n+=1
          }
        }
        if(n==0){
          this.productService.getCompra().subscribe((data:any)=>{
            for(let i of data){
              if(i.terminado==0){
                this.productService.deleteCompra(i.id).subscribe()
                let control={
                  id:1,
                  control:0,
                  compra:0
                }
                this.productService.setControl(1,control).subscribe()
                setTimeout(() => {},50);
                this.ngOnInit()
              }
            }
          })
        }else{
          setTimeout(() => {},50);
          this.precioTotal();
        }
      })
    }else{
      this.productService.setCompras(compo.id,prod).subscribe((data:any)=>{})
      this.precioTotal();
    }
  }
  comprar(form:any){
    let terminado={
      cliente: form.value.cantidad.cliente,
      id: form.value.cantidad.id,
      precioTotal: form.value.cantidad.precioTotal,
      terminado: 1
    }
    this.productService.updateCompra(terminado.id,terminado).subscribe()
    window.location.href=("cuenta/pago")
  }
  cancelar(form:any){
    this.productService.getCompras().subscribe((data:any)=>{
      for(let i of data){
        if(i.compra==form.value.cantidad.id){
          this.productService.deleteCompras(i.id).subscribe()
        }
      }
      this.productService.deleteCompra(form.value.cantidad.id).subscribe()
      let control={
        id:1,
        control:0,
        compra:0
      }
      this.productService.setControl(1,control).subscribe()
      this.ngOnInit()
    })
  }
}
