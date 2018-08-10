import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { InitComponent } from 'src/app/modules/dashboard/init/init.component';

import { ClientsModel } from './models/clients/clients.model';
import {TableComponent} from './modules/utils/table/table/table.component';

const routes: Routes = [
  {
    path: 'init',
    component: InitComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'clients',
        component: TableComponent ,  data: {'model': ClientsModel}
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
