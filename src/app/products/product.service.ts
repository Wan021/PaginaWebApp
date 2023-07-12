import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:10000"

  constructor(
    private httpClient:HttpClient
  ) { }

  createComentarios(mensaje:any){
    const baseUrl=this.url+"/comentarios";
    return  this.httpClient.post(baseUrl,mensaje)
  }
  createProduct(prodcutBody: any):Observable<Product>{
    const baseUrl=this.url+"/product";
    return this.httpClient.post<Product>(baseUrl, prodcutBody);
  }
  createCategory(prodcutBody: any){
    const baseUrl=this.url+"/categories";
    return this.httpClient.post(baseUrl, prodcutBody);
  }
  viewProduct():Observable<Product>{
    const baseUrl=this.url+"/product";
    return this.httpClient.get<Product>(baseUrl);
  }
  viewOneProduct(prodcutId:any):Observable<Product>{
    const baseUrl=this.url+"/product?id="+prodcutId;
    return this.httpClient.get<Product>(baseUrl);
  }
  updateProduct(prodcutId:any,prodcutBody:any):Observable<Product>{
    const baseUrl=this.url+"/product/"+prodcutId;
    return this.httpClient.put<Product>(baseUrl, prodcutBody);
  }
  deleteProduct(prodcutId:any){
    const baseUrl=this.url+"/product/"+prodcutId;
    return this.httpClient.delete(baseUrl);
  }
  deletecategory(prodcutId:any){
    const baseUrl=this.url+"/categories/"+prodcutId;
    return this.httpClient.delete(baseUrl);
  }
  searchCategoryProducts( id:any ):Observable<Category>{
    const baseUrl=this.url+"/product?id="+id;
    return this.httpClient.get<Category>(baseUrl);
  }
  searchCategoryProduct( id:any ):Observable<Category>{
    const baseUrl=this.url+"/product?categoryID="+id;
    return this.httpClient.get<Category>(baseUrl);
  }
  searchCategoryName(id: any){
    const baseUrl=this.url+"/categories?id="+id;
    return this.httpClient.get(baseUrl);
  }
  searchDateProducts(date: any){
    const baseUrl=this.url+"/product/date="+date;
    return this.httpClient.get(baseUrl);
  }
  getCategory(){
    const baseUrl=this.url+"/categories";
    return this.httpClient.get(baseUrl);
  }
  getSubCategory(){
    const baseUrl=this.url+"/subcategory";
    return this.httpClient.get(baseUrl);
  }
  getControl(){
    const baseUrl=this.url+"/control";
    return this.httpClient.get(baseUrl);
  }
  getCompra(){
    const baseUrl=this.url+"/compra";
    return this.httpClient.get(baseUrl);
  }
  getOneCompra(id:any){
    const baseUrl=this.url+"/compra/"+id;
    return this.httpClient.get(baseUrl);
  }
  getOneCategory(id:any){
    const baseUrl=this.url+"/categories/"+id;
    return this.httpClient.get(baseUrl);
  }
  updateCategory(id:any,doc:any){
    const baseUrl=this.url+"/categories/"+id;
    return this.httpClient.put(baseUrl,doc);
  }
  getCompras(){
    const baseUrl=this.url+"/subcompra";
    return this.httpClient.get(baseUrl);
  }
  getOneCompras(id:any){
    const baseUrl=this.url+"/subcompra/"+id;
    return this.httpClient.get(baseUrl);
  }
  setCompras(id:any,lista:any){
    const baseUrl=this.url+"/subcompra/"+id;
    return this.httpClient.put(baseUrl,lista);
  }
  deleteCompras(id:any){
    const baseUrl=this.url+"/subcompra/"+id;
    return this.httpClient.delete(baseUrl);
  }
  updateCompra(id:any,doc:any){
    const baseUrl=this.url+"/compra/"+id;
    return this.httpClient.put(baseUrl,doc);
  }
  updateCompras(id:any,doc:any){
    const baseUrl=this.url+"/subcompra/"+id;
    return this.httpClient.put(baseUrl,doc);
  }
  createCompras(compraBody: any){
    const baseUrl=this.url+"/subcompra";
    return this.httpClient.post(baseUrl, compraBody);
  }
  deleteCompra(id:any){
    const baseUrl=this.url+"/compra/"+id;
    return this.httpClient.delete(baseUrl);
  }
  setControl(id:any,lista:any){
    const baseUrl=this.url+"/control/"+id;
    return this.httpClient.put(baseUrl,lista);
  }
  createCompra(lista:any){
    const baseUrl=this.url+"/compra";
    return this.httpClient.post(baseUrl, lista);
  }
}
