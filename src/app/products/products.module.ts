import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    FormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent,
    ProductListComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class ProductsModule { }
