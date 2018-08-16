import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { InitComponent } from './init/init.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../../material';
import { RouterModule } from '@angular/router';
import { HttpUtilsModule} from '../http-utils/http-utils.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpUtilsModule,
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
