import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { InitComponent } from './init/init.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../../material';
import { RouterModule } from '@angular/router';
import { HttpUtilsModule} from '../http-utils/http-utils.module';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { MenuComponent } from './menu/menu.component';

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
    InitComponent,
    LeftbarComponent,
    MenuComponent
  ],

  declarations: [TopbarComponent, FooterComponent, DashboardComponent, InitComponent, LeftbarComponent, MenuComponent]
})
export class DashboardModule { }
