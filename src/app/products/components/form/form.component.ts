import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'products-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  product: Product = {
    id: 1,
    name: "Keyboard",
    description: 'Mechanical keyboard',
    price: 25
  }

  @Output()
  public onNewProduct: EventEmitter<Product> = new EventEmitter();;

  public onSubmit() {
    console.log(this.product)

    this.onNewProduct.emit(this.product);
    this.cleanProduct();
  }

  public cleanProduct(): void {
    this.product = {
      id: 0,
      name: "",
      description: '',
      price: 0
    }
  }
}
