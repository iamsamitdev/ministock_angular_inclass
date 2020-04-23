import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    apiURL = "http://localhost/ministockapi/public/api/";

    constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }

    // อ่านข้อมูล Product (Method GET)
    getProducts(): Observable<ProductModel>{
        return this.http.get<ProductModel>(this.apiURL + 'products')
    }

}
