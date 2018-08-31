import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { InitComponent } from 'src/app/modules/dashboard/init/init.component';
import { LoginComponent } from './modules/auth/login/login.component';

import { TableComponent } from './modules/utils/table/table/table.component';
import { TeetimeComponent } from './modules/utils/teetime/teetime/teetime.component';
import { ProgrammingComponent } from './components/programming/programming.component';
import { ProgrammingModel } from './models/programming/programming.model';
const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {

    path: 'init',
    component: InitComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        outlet: 'principal'
      },
      {
        path: 'programar',
        component: TableComponent ,  data: {'model': ProgrammingModel},
        outlet: 'principal'
      },

      {
        path: 'reservation',
        component: TeetimeComponent,
        outlet : 'principal'

      },
      {
        path: 'programmingForm',
        component: ProgrammingComponent,
        outlet: 'leftBar'
      }
    ],
  },
  { path: '**', component: InitComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
