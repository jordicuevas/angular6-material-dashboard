import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../material';
import { DashboardComponent } from './dashboard/dashboard.component';
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
    DashboardComponent
  ],
  declarations: [TopbarComponent, FooterComponent, DashboardComponent]
})
export class DashboardModule { }
