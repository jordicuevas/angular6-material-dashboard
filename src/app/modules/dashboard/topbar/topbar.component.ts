import { Component, OnInit, ViewChild} from '@angular/core';
 import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {
  // @ViewChild('right') sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
     // this.sidenav.open();
  }
}
