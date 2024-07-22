import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResult } from '../../types';
import { Observable } from 'rxjs';

const url = 'http://localhost:3310/clothes';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductResult> {
    return this.http.get<ProductResult>(url) as Observable<ProductResult>;
  }
}
