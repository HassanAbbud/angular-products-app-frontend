import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,

    FormsModule
  ],
  exports: [
    FormComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
