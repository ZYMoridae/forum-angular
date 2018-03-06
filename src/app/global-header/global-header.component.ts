import { Component, Inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginModalComponent } from '../global-header/login-modal/login-modal.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {
  email: string
  password: string
  userInfo: any
  isLoggedIn = false
  constructor(
    public dialog: MatDialog, 
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    console.log('666666666')
    let cookiesUserInfo = this.cookieService.get('userInfo');
    console.log(cookiesUserInfo)
    if(cookiesUserInfo && typeof cookiesUserInfo !== 'undefined') {
      this.userInfo = cookiesUserInfo;
      this.isLoggedIn = true;
    }else {
      this.isLoggedIn = false;
    }   
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginModalComponent, {
      width: '250px',
      data: {
        email: this.email,
        password: this.password,
        login: this.logIn
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(`The dialog was closed ${data}`);
    });
  }
  logIn(response): void {
    this.isLoggedIn = true;
    this.userInfo = response;
    console.log(this.userInfo)
  }
  logOut(): void {
    this.cookieService.delete('userInfo');
    this.isLoggedIn = false;
    this.userInfo = null;
  }
}