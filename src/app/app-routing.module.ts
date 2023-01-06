import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfonudComponent } from './Components/notfonud/notfonud.component';
import { OrderConfirmationComponent } from './Components/order-confirmation/order-confirmation.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"",redirectTo:"myStore",pathMatch:"full"},
  {path:"myStore",component:ProductListComponent},
  {path:"cart",component:ShoppingCartComponent},
  {path:"OrderConfirmation",component:OrderConfirmationComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"**",component:NotfonudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
