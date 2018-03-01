import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MealplanComponent } from './mealplan/mealplan.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mealplan', component: MealplanComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
