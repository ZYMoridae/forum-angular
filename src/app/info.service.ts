import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';
import { RequestHeader } from './request-header';
import { CookieService } from 'ngx-cookie-service';
// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'X-USER-ACCESS-TOKEN': 'kjLyAqTENoUUxXMxaDKS',
//     'X-USER-ID': '9709750'
//   })
// };

@Injectable()
export class InfoService {
  httpOptions: any = {}
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getInfo(url, params, method): any {
    let userID = this.cookieService.get('userID'),
        accessToken = this.cookieService.get('accessToken');
    if(userID && accessToken) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'X-USER-ACCESS-TOKEN': accessToken,
          'X-USER-ID': userID
        })
      }
    }
    switch(method) {
      case 'GET':
        return this.http.get(url, Object.assign({}, this.httpOptions, {observe: 'response'}, {params: params}))
      case 'POST':
        return this.http.post(url, params, Object.assign({}, this.httpOptions, {observe: 'response'}))
    }
    return {}
  }

}
