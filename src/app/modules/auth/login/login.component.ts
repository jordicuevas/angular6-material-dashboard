import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

declare var $: any
export interface LoginInterface {
  email: any;
  password: any;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   public login: LoginInterface;

  constructor(private _router: Router) { }
  ngOnInit() {
    // this._router.navigate(['init', {outlets: {principal: 'dashboard'}}]);
    this.login = {
       email  : '',
       password : ''
    };
    $('#email').focus();
  }


  onSubmit (form){
   if ( form.email === 'admin@zippyttech.com' && form.password === '123456') {
     this._router.navigate(['init', {outlets: {principal: 'dashboard'}}]);
   } else {
     return false;
   }
  }
}
