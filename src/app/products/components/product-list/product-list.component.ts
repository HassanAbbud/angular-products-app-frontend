import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'products-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);

  public products: Product[] = [];

  public selectedProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }


  ngOnInit(): void {
    this.productService.findAll().subscribe(products => {
      this.products = products; //fill products from service
    });
  }

  addProduct(product: Product) : void {
    if(product.id > 0) {
      this.products = this.products.map(currentProduct => {
        if(currentProduct.id == product.id){
          return {...product}
        }
        return currentProduct
      })
    } else {
    // product.id = new Date().getTime();
    // this.products.push(product);
    this.products = [... this.products, { ...product, id: new Date().getTime() }];
    }
    // this.selectedProduct = {
    //   id: 0,
    //   name: '',
    //   description: '',
    //   price: 0
    // }
  }

  public onEditProduct(productRow: Product){
    this.selectedProduct = {...productRow};
  }

  public onDelete(id: number){
    this.products = this.products.filter(currentProducts => currentProducts.id != id)
  }
}
