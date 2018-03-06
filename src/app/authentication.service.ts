import { Injectable } from '@angular/core';
import { InfoService } from './info.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthenticationService {
  userID = null
  accessToken = null
  constructor(
    private infoService: InfoService, 
    private cookieService: CookieService
  ) { }

  login(url, params, callback=null) {
    return this.infoService.getInfo(url, params, 'POST')
                    .subscribe(response => {
                      if(response.body) {
                        this.cookieService.set('userID', response.body.id);
                        this.cookieService.set('accessToken', response.body.access_token);
                      }
                      console.log(response.body)
                      if(typeof callback === 'function') {
                        callback(response.body);
                      }
                    });
  }
  
}
