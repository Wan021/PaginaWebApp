import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Client } from '../client';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  clients:Client|any;
  ultElemento:any;
  unique=new Array();
  element:number|any;
  corNum:string|any;

  constructor(
    private clientService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.clientService.viewClient().subscribe((data:any) => {
      this.mostrar(data);
      this.clients=data;
    })
    this.element=0;
  }
  mostrar(clientes:any){
    this.ultElemento=clientes[clientes.length-1];
  }
  verificarCliente(form: any) {
    let Client: any = {
      data: form.value.email
    };
  
    let hasMatch = this.clients.some((data: any) => {
      if (Client.data == data.correo || Client.data == data.numero) {
        this.element = 1;
        this.corNum = Client.data;
        return true;
      }
      return false;
    });
  
    if (!hasMatch) {
      window.location.href = "cuenta/registrer";
    }
  }
  IngresarClient(form:any){
    let Client:any={
      data:this.corNum,
      contraseña:form.value.password
    };

    this.clients.filter((c:any)=>{
      if((Client.data==c.correo && Client.contraseña==c.contraseña)||(Client.data==c.numero && Client.contraseña==c.contraseña)){
        this.unique.push(c);
      }
    })
    if(this.unique.length!=0){
      const updateLog={
        id:1,
        logeado:this.unique[0]["id"],
        cuenta:this.unique[0]["role"]
      };
      this.clientService.updatecuenta("1",updateLog).subscribe()
      window.location.href=("")

    }else{
      window.alert("Contraseña incorrecta")
    }
  }
}
