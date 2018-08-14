import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeetimeComponent } from './teetime/teetime.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ TeetimeComponent ],
  declarations: [ TeetimeComponent ]
})
export class TeetimeModule { }
