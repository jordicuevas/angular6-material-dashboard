import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class LeftbarService {
  public sidenav: MatSidenav;


  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
  constructor() { }
}
