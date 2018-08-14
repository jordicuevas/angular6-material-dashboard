import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public token;
  public apiaddr;
  public headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer' + this.token });

  constructor() {
    this.token = localStorage.getItem('Bearer');
    this.apiaddr = 'http://10.0.1.199:8600';
  }
}
