import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { SuperuserComponent } from './site/superuser/superuser.component';
import { SearchComponent } from './product/search/search.component';
import { ProductTypeComponent } from './product/product-type/product-type.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StockManagementComponent } from './product/stock-management/stock-management.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductBillingComponent } from './product/product-billing/product-billing.component';
import { PurchaseHistoryComponent } from './product/purchase-history/purchase-history.component';


const appRoutes: Routes = [ 
  { path: 'signup/:type', component: SignupComponent},
  { path: 'login',component: LoginComponent},
  {path:'superuser',component:SuperuserComponent},
  {path:'search-bar',component: SearchComponent},
  {path:'product',component: ProductTypeComponent},
  {path:'product-edit/:code',component:StockManagementComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'product-bill',component:ProductBillingComponent},
  {path:'purchase-history',component:PurchaseHistoryComponent},
  {path:'product-list',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
