import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddressComponent} from './address/address.component'
import {SignComponent} from './sign/sign.component'

const routes: Routes = [
  { path: '', redirectTo: '/address', pathMatch: 'full' },
  { path: 'address', component: AddressComponent },
  { path: 'sign', component: SignComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
