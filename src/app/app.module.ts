import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { HttpUtilsModule } from 'src/app/modules/http-utils/http-utils.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';


 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpUtilsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    RouterModule,
    ToastrModule.forRoot()
   ],
  providers: [ HttpUtilsModule],
  bootstrap: [AppComponent],
   entryComponents: []
})
export class AppModule { }
