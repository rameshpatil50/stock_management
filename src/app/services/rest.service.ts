import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  getallstock(){
    const url = environment.server_url + 'get_stock';
    return this._http.get(url);
  }

  addStock(data:any){
    const url = environment.server_url + 'add_stock';
    return this._http.post(url, data);
  }
}

