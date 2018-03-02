import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { MealplanComponent } from './mealplan/mealplan.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {InfoService} from './info.service';
import {AuthenticationService} from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import {TimeAgoPipe} from 'time-ago-pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ForumNavigatorComponent } from './forum-navigator/forum-navigator.component';
import { ForumModule } from './forum/forum.module';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginModalComponent } from './global-header/login-modal/login-modal.component';
import { CookieService } from 'ngx-cookie-service';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("378912929246654")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MealplanComponent,
    GlobalHeaderComponent,
    TimeAgoPipe,
    ForumNavigatorComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    ForumModule,
    SocialLoginModule.initialize(config)
  ],
  entryComponents: [
    LoginModalComponent
  ],
  providers: [InfoService, AuthenticationService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
