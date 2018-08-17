import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';
import {  LeftbarService } from '../../../services/leftbar.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss']
})
export class LeftbarComponent implements OnInit {
  @ViewChild('left') public sidenav: MatSidenav;

  constructor( public sideNService: LeftbarService) { }

  ngOnInit() {
    this.sideNService.setSidenav(this.sidenav);
  }

}
