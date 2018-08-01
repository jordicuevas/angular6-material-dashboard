import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  // @ViewChild('right') sidenav: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // this.sidenav.open();
  }
}
