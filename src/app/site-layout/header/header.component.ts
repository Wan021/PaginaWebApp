import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/orders/orders.service';
import { Client } from 'src/app/orders/client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  number:number| any = {};
  parameter=new Array();
  cliente:Client| any = {};
  constructor(private clientService:OrdersService) { }

  ngOnInit(): void {
    this.clientService.getcuentas().subscribe((array:any)=>{
      this.set(array)
    });
  }
  set(number:any){
    this.number=number[0]["cuenta"]
    if(this.number!=0){
      this.clientService.getClient(number[0]["logeado"]).subscribe((a:any)=>{
        this.may(a)
      })
    }
  }
  may(array:any){
    this.cliente=array
  }
}
