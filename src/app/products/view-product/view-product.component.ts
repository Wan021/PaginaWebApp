import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { OrdersService } from 'src/app/orders/orders.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {

  show:boolean = true
  productID:Product|any;
  productData:Product|any;
  List=new Array();
  compras:any
  compra:any
  idNewCompra=0
  text:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductService:ProductService,
    private clientService:OrdersService
  ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((data:any) =>{
      this.productID=data['id'];
    })
    this.ProductService.viewOneProduct(this.productID).subscribe((viewData:any) =>{
      this.productData=viewData;
    })

    this.clientService.getcuentas().subscribe((array:any)=>{
      this.List=array;
    });
    this.ProductService.getCompras().subscribe((an:any)=>{
      this.compras=an
    })
    this.ProductService.getCompra().subscribe((an:any)=>{
      this.compra=an
    })
  }
  AddCarProduct(form:any){
    this.ProductService.getCompras().subscribe((compras:any)=>{
      this.ProductService.getCompra().subscribe((compra:any)=>{
        let bandera=true
        for(let i of compra){
          if(i.terminado==0){
            bandera=false
            let z=true
            for(let j of compras){
              this.idNewCompra=j.id
              if(i.id==j.compra&&j.producto==parseInt(this.productID)){
                z=false
                let newProduct={
                  id: j.id,
                  producto: parseInt(this.productID),
                  compra: j.compra,
                  cantidad: form.value.cantidad+j.cantidad
                };
                this.ProductService.updateCompras(j.id,newProduct).subscribe((an:any)=>{
                  this.ProductService.getCompra().subscribe((an:any)=>{
                    this.compra=an
                    let newP={
                      id: i.id,
                      cliente: i.cliente,
                      precioTotal: i.precioTotal+(this.productData[0]["price"]*form.value.cantidad),
                      terminado: i.terminado
                    };
                    this.ProductService.updateCompra(i.id,newP).subscribe((Pric:any)=>{
                      this.show = false;
                      setTimeout(() => {
                          this.show = true
                      }, 50);
                      this.ngOnInit();
                    })
                  })
                })
              }
            }
            if(z){
              let newProduct={
                id: this.idNewCompra+1,
                producto: parseInt(this.productID),
                compra: i.id,
                cantidad: form.value.cantidad
              };
              this.ProductService.createCompras(newProduct).subscribe((an:any)=>{
                this.ProductService.getCompra().subscribe((an:any)=>{
                  this.compra=an
                  let newP={
                    id: i.id,
                    cliente: i.cliente,
                    precioTotal: i.precioTotal+(this.productData[0]["price"]*form.value.cantidad),
                    terminado: i.terminado
                  };
                  this.ProductService.updateCompra(i.id,newP).subscribe((Pric:any)=>{
                    this.show = false;
                    setTimeout(() => {
                        this.show = true
                    }, 50);
                    this.ngOnInit();
                  })
                })
              })
            }
          }
        }
        if(bandera){
          for(let i of compra){
            this.idNewCompra=i.id
          }
          this.idNewCompra+=1;
          let control={
            id:1,
            control:1,
            compra:this.idNewCompra
          }
          this.ProductService.setControl(1,control).subscribe();
          this.clientService.getcuentas().subscribe((data:any)=>{
            let compr={
              id:this.idNewCompra,
              cliente: data[0]["cuenta"],
              precioTotal: this.productData[0]["price"]*form.value.cantidad,
              terminado: 0
            }
            this.ProductService.createCompra(compr).subscribe()
            this.ProductService.getCompras().subscribe((compras:any)=>{
              let id=0
              for(let j of compras){
                id=j.id
              }
              let newProduct={
                id: id+1,
                producto: parseInt(this.productID),
                compra: this.idNewCompra,
                cantidad: form.value.cantidad
              };
              this.ProductService.createCompras(newProduct).subscribe()
              this.show = false;
              setTimeout(() => {
                  this.show = true
              }, 50);
              this.ngOnInit();
            })
          });
        }
      })
    })
  }
  saltoLinea(texto: string) {
    this.text=texto.replace(/•\t/g, '<code><br>&bull;</code>');
    this.text=texto.replace(/🎮/g, '<code><br>&bull;</code>');
    this.text=this.text.replace(/\f/g, '<code><br><br></code>');
    this.text=this.text.replace(/\t/g, '<code><br></code>');
    this.text=this.text.replace(/\r/g, '<code>&nbsp;&nbsp;&nbsp;</code>')
    return this.text
  }
}
