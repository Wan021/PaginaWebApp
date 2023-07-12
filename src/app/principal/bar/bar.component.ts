import { Category } from 'src/app/site-layout/category';
import { ProductService } from '../../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public categoryList: Category[]=[
  ];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  }
  Formulario(form:any){
    if(form.value.nombre==""||form.value.correo==""||form.value.texto){
      alert("Rellena todos los datos");
    }else{
      this.productService.createComentarios(form.value).subscribe()
      alert("Mensaje enviado correctamente");
      window.location.href=("")
    }
  }
}
