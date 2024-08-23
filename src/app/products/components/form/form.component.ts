import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'products-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
cleanForm() {
throw new Error('Method not implemented.');
}
  private fb = inject(FormBuilder);

  @Input()
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  // @Input()
  // public myForm = this.fb.group({
  //   id: [0, Validators.required],
  //   name: ['', Validators.required],
  //   description: [''],
  //   price: [0, Validators.min(100)],
  // })

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
