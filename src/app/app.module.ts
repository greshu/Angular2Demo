import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

// import {AgGridModule} from "ag-grid-angular";
// import {AgGridModule} from "ag-grid-angular/main"
import { HotTableModule } from 'ng2-handsontable';
import { AddressComponent } from './address/address.component';
import { SignComponent } from './sign/sign.component';

//Services
import {AddressService} from './address.service';
import { PagerService } from './service/pager.service';
import { AppRoutingModule } from './/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    HotTableModule
    // AgGridModule.withComponents([ ])
  ],
  providers: [AddressService, PagerService],
  bootstrap: [AppComponent]
})

export class AppModule { 


}
