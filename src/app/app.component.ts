import { Component } from '@angular/core';
import { Product } from './products/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Angular app'
  enabled: boolean = true;

  products: Product[] = [];

  public setEnabled (): boolean{
    return this.enabled = !this.enabled;
  }
}
