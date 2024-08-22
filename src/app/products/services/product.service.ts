import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
      description: 'Multi-port adavter to connect usb devices',
      price: 50
    }
  ];

  constructor() { }

  public findAll(): Observable<Product[]> {
    return of(this.products);
  }
}
