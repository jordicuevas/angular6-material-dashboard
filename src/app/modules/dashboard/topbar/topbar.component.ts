import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatSidenav } from '@angular/material';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: ''}
];

@Component({
  selector: 'app-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  isExpanded = false;

  private listTitles: any[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    public location: Location,
    private toastr: ToastrService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    // this.toastr.success('Hello world!', 'Toastr fun!',{'progressBar': true});
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split('/').pop();

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }
}
