import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private clientService: OrdersService) { }

  ngOnInit(): void {
    const updateLog={
      id:1,
      logeado:0,
      cuenta:0
    };
    this.clientService.updatecuenta("1",updateLog).subscribe()
    window.location.href=("")
  }
}
