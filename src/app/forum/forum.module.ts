import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondNavigatorComponent } from './second-navigator/second-navigator.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {InfoService} from '../info.service';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    SecondNavigatorComponent
  ],
  providers: [
    InfoService
  ],
  exports: [
    SecondNavigatorComponent
  ]
})
export class ForumModule { }
