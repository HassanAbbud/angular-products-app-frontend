import { Product } from '../../interfaces/product';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  public products: Product[] = [];

  public selectedProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.findAll().subscribe(products => {
      this.products = products; //fill products from service
    });
  }

  addProduct(product: Product) : void {
    product.id = new Date().getTime();
    this.products.push(product);
    // this.products = [...this.products, {...product}]
  }

  public onEditProduct(productRow: Product){
    this.selectedProduct = productRow;
  }

}
