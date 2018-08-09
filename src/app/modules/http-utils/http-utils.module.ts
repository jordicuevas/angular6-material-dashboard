import { NgModule,  ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttputilsService } from './httputils.service';



@NgModule({
   providers: [ HttputilsService  ]
})
export class HttpUtilsModule {


}
