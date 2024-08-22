import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  public products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit(): void {
      this.productService.findAll().subscribe(products =>{
        this.products =  products; //fill products from service
      });
  }

}
