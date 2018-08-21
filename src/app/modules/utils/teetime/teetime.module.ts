import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeetimeComponent } from './teetime/teetime.component';
import { MaterialModule } from '../../../material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ TeetimeComponent ],
  declarations: [ TeetimeComponent ]
})
export class TeetimeModule { }
