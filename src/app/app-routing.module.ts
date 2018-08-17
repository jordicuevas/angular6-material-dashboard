import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { InitComponent } from 'src/app/modules/dashboard/init/init.component';

import { ClientsModel } from './models/clients/clients.model';
import { TableComponent } from './modules/utils/table/table/table.component';
import { VehiclesModel } from './models/vehicles/vehicles.model';
import { TeetimeComponent } from './modules/utils/teetime/teetime/teetime.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [

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
        path: 'clients',
        component: TableComponent ,  data: {'model': ClientsModel},
        outlet: 'principal'
      },
      {
        path: 'vehicles',
        component: TableComponent ,  data: {'model': VehiclesModel},
        outlet: 'principal'
      },
      {
        path: 'reservation',
        component: TeetimeComponent,
        outlet : 'principal'

      },
      {
        path: 'forms',
        component: TestComponent,
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
