import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent} from './components/home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';



const routes: Routes = [
  // { path: '', component: ProductComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
