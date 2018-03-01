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
import { HttpClientModule } from '@angular/common/http';
import {TimeAgoPipe} from 'time-ago-pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SecondNavigatorComponent } from './forum/second-navigator/second-navigator.component';
import { ForumNavigatorComponent } from './forum-navigator/forum-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MealplanComponent,
    GlobalHeaderComponent,
    TimeAgoPipe,
    SecondNavigatorComponent,
    ForumNavigatorComponent
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
    AngularFontAwesomeModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
