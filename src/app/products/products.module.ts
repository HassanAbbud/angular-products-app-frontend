import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
