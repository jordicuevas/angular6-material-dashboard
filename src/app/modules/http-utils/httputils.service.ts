import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Http } from '@angular/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HttputilsService {
  private apiaddr;
  private headers;
  constructor( private _config: ConfigService, private http: Http, public toastr: ToastrService) {
     this.apiaddr = this._config.apiaddr;
     this.headers = this._config.headers;
  }
  makeToast () {
    setTimeout(() => this.toastr.info('httputils service'));
  }
  /*
  * @Method : doSave
  * @Params :
  *  - Endpoint
  *  - Model
  * */
  doSave(model , endpoint) {
    const that = this;
    // console.log("endpoint save : "+this.envService.api+"/"+endpoint+model);

    this.http.post(this.apiaddr + '/' + endpoint, model , { headers: this.headers }).subscribe(
      function(response) {
      },
      function(error) {
        // console.log(error)

      },
      function() {

      });
  } // doSave

}
