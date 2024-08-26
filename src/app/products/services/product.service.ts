import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private products: Product[] = [
    {
      id: 1,
      name: 'Office chair',
      description: 'Comfortable chair for everyday use',
      price: 100
    },
    {
      id: 2,
      name: 'USB hub',
      description: 'Multi-port adapter to connect usb devices',
      price: 50
    }
  ];

  private backendUrl: string = "http://localhost:8080/products";

  constructor() { }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.backendUrl)
      .pipe(
        map((response:any) => response._embedded.products) // Correctly extracting the array from the response
      );
  }

  public create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.backendUrl, product);
  }

  public update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.backendUrl}/${product.id}`, product);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`);
  }
}
