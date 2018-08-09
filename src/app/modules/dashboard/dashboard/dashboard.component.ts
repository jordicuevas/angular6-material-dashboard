import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  HttputilsService } from 'src/app/modules/http-utils/httputils.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit , AfterViewInit{
   constructor(private httpUtils: HttputilsService) {}

  ngOnInit() {
  }
  ngAfterViewInit () {
    this.httpUtils.makeToast();
  }
}
