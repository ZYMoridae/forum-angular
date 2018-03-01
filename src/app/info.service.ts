import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 
    'X-USER-ACCESS-TOKEN': 'kjLyAqTENoUUxXMxaDKS',
    'X-USER-ID': '9709750',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true"
  })
};

@Injectable()
export class InfoService {
  constructor(
    private http: HttpClient
  ) { }

  getInfo(url, params): any {
    return this.http.get(url, Object.assign({}, httpOptions, {observe: 'response'}, {params: params}))
  }

}
