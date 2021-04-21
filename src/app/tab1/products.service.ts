import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.Interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  saveProduct(product): Observable<Product> {
    return this._http.post<Product>('http://localhost:3000/products', product);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/products');
  }

  getProduct(id: string): Observable<Product> {
    console.log(id);
    
    const prod = this._http.get<Product>(`http://localhost:3000/products/${id}`);
    console.log(prod);
    
    return prod;
  }
}
