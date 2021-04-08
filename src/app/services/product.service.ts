import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsURl="http://localhost:8082";
 

  constructor(private httpClient :HttpClient) { }
  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.productsURl}/api/products`);
  }
  getProdsByCatId(categoryId):Observable<any>{
    return this.httpClient.get(`${this.productsURl}/api/products/${categoryId}`);
  }
  
}
