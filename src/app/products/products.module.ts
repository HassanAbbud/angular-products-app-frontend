import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,

    FormsModule
  ],
  exports: [
    FormComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
