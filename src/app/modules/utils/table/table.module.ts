import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [TableComponent],
  exports: [
    TableComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TableModule { }
