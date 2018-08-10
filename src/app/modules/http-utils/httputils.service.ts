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
    // console.log("endpoint save : "+this.envService.api+"/"+endpoint+model);

    this.http.post(this.apiaddr + '/' + endpoint, model , { headers: this.headers }).subscribe(
      (response) => {
       },
      (err) => {
        this.toastr.error(err);
      },
      () => {
      });
  } // doSave

  /*
  * @Method : doUpdate
  * @Params :
  *  - Endpoint=> endpoint a usar
  *  - Model=> data a actualizar
  *  - Key=> clave primaria para actualizar
  * */
  doUpdate(endpoint, key , Model){
    // console.log("el endpoint : +"+this.envService.api+"/"+endpoint+"/"+key+data)
    this.http.put(this.apiaddr + '/' + endpoint + '/' + key, Model , { headers: this.headers }).subscribe(
      (response) => {
      },
      (err) => {
      },
      () => {
      });
  }// doUpdate
  /*
  * @Method : doDelete
  * @Params :
  *  - Endpoint=> endpoint a usar
  *  - Key=> clave primaria para realizar eliminado
  * */
  doDelete(endpoint, key){
    this.http.delete(this.apiaddr + endpoint + key,{ headers: this.headers }).subscribe(
      (response) => {
      },
      (err) => {
      },
      () => {
      });

  }// doDelete


}
