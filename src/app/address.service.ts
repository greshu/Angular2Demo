import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddressService {
  addressUrl = environment.apiUrl + "Address/"

  constructor(
    private http: HttpClient
  ) { 

  }

  getBitCoinAddressList (start, pageSize) {
    let dataOption = {
      start: start,
      length: pageSize
    }
    return this.http.post( this.addressUrl+ 'GetAddressList', dataOption, httpOptions);
  }

}
