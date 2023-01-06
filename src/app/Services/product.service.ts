import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "../model/product";
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _HttpClient:HttpClient ) { }
  getProducts():Observable<Product[]>
  {
    return this._HttpClient.get<Product[]>('assets/data.json')
  }
}
