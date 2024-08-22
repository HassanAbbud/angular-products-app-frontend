import { Component } from '@angular/core';
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

}
