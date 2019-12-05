import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import {  HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import { SuperuserComponent } from './site/superuser/superuser.component';
import { SearchComponent } from './product/search/search.component';
import { ProductTypeComponent } from './product/product-type/product-type.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StockManagementComponent } from './product/stock-management/stock-management.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductBillingComponent } from './product/product-billing/product-billing.component';
import { PurchaseHistoryComponent } from './product/purchase-history/purchase-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SuperuserComponent,
    SearchComponent,
    ProductTypeComponent,
    ProductListComponent,
    StockManagementComponent,
    AddProductComponent,
    ProductBillingComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
