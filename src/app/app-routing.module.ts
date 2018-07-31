import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';


const routes: Routes = [

    {
      path: 'dashboard', component: DashboardComponent,

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
