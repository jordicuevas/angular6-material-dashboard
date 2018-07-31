import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../material';
 @NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
  ],
  declarations: [TopbarComponent, FooterComponent]
})
export class DashboardModule { }
