import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { InitComponent } from './init/init.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../../material';
import { RouterModule } from '@angular/router';

 @NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    DashboardComponent,
    InitComponent
  ],
  declarations: [TopbarComponent, FooterComponent, DashboardComponent, InitComponent]
})
export class DashboardModule { }
