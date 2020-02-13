import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CadastrarUsuariosService {

  constructor(private http: HttpClient) {
   }
   login(data: any){
    return this.http.post("",data);

      
  }
  cadastrar(data: any){
    return  this.http.post("",data);
  }
}
