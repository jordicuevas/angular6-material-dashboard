import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InitComponent } from './init/init.component';
 @NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  declarations: [TopbarComponent, FooterComponent, DashboardComponent, InitComponent]
})
export class DashboardModule { }
