import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Client } from '../client';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})

export class ListOrderComponent implements OnInit {

  ultElemento:any;

  constructor(
    private clientService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.clientService.viewClient().subscribe((data:any) => {
      this.mostrar(data);
    })
  }
  mostrar(clientes:any){
    this.ultElemento=clientes[clientes.length-1];
  }
  AddNewClient(form:Client|any){
    if(form.value.password==form.value.password2){
      let newClient={
        id:this.ultElemento.id+1,
        correo:form.value.email,
        contraseña:form.value.password,
        nombre:form.value.name,
        numero:form.value.numero,
        role:1
      };
      this.clientService.createClient(newClient).subscribe((data:any) =>{
        alert("Usuario ingresado correctamente");
        location.href=""
      });
    }else{
      window.alert("Las contraseñas no coinciden")
    }
  }
}
