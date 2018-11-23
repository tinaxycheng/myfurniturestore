import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { HomeComponent } from './home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from './../environments/environment';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CustomFormsModule } from 'ng2-validation';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    ProductsComponent,
    HomeComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    LoginComponent,
    NavbarComponent,
    MyOrdersComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    ProductQuantityComponent,
    OrderDetailsComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
    {path:'about',component: AboutComponent},
    {path:'cart',component: CartComponent},
    {path:'products',component: ProductsComponent},
    {path:'',component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'check-out',component: CheckOutComponent, canActivate: [AuthGuardService]},
    {path:'order-success/:id',component: OrderSuccessComponent, canActivate: [AuthGuardService]},
    {path:'my/orders',component: MyOrdersComponent, canActivate: [AuthGuardService]},
    {path:'order-details/:id',component: OrderDetailsComponent, canActivate: [AuthGuardService]},
    {path:'admin/orders',component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    {path:'admin/products',component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    {path:'admin/products/new',component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    {path:'admin/products/:id',component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},


    ])
  ],
  providers: [
    ProductService,
    AuthService,
    CartService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    OrderService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


