import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AuthenticationService } from '../../authentication.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private authenticationService: AuthenticationService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  loginClick() {
    this.authenticationService.login('/api/v5/email/login', {
      email: this.data.email,
      password: this.data.password
    });
  }
  dismissDialog() {
    this.dialogRef.close();
  }
  loginFacebookClick() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((response)=>{
      console.log(response)
      this.authenticationService.login('/api/v2/facebook/login', {
        facebook_token: response.authToken,
      }, this.dismissDialog.bind(this));
    });
  }
}
