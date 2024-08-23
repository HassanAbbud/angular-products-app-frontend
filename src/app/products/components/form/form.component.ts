import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'products-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
cleanForm() {
throw new Error('Method not implemented.');
}

  @Input()
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  @Output()
  public onNewProduct: EventEmitter<Product> = new EventEmitter();;

  public onSubmit() {
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
