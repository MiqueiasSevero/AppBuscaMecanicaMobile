import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
   
  private url:string = "http://10.131.45.51/restAppBuscaMecanica";
  constructor(private http: HttpClient) {
   }
    login(data: any){
    return this.http.post(this.url +"/login.php ",data);

      
  }
  cadastrar(data: any){
    return  this.http.post("",data);
  }
}
