import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  apiURL: string;
  loginChange = new Subject<any>();
  listMundoChange = new Subject<any>();
  listPlayerWorldOnline = new Subject<any>();
  imgDownloadChanger = new Subject<any>();
  userLogado :boolean;


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.apiURL = 'http://localhost:54130/';
   }

   logar(username : string , password : string) {
     console.log("");
    let data = {username: username.toString(), password : password.toString()};
    this.http.get<any>(`api/api/Usuarios/teste/`, {params : data}).subscribe((res) => {
      this.loginChange.next(res);
      this.userLogado = true;
    },(err:HttpErrorResponse)=>{
      this.loginChange.next(false);
    });
  }

  onPesquisarMundo(url : string) {
   this.http.get<any>(url).subscribe((res) => {
     this.listMundoChange.next(res);
   },(err:HttpErrorResponse)=>{
     this.loginChange.next(false);
   });
 }

 onPlayerWorld(url : string) {
  this.http.get<any>(url).subscribe((res) => {
    console.log(res)
    this.listPlayerWorldOnline.next(res);
  },(err:HttpErrorResponse)=>{
    this.loginChange.next(false);
  });
}
  
    downloadImg(url: string) {
      let headers = new Headers();
    headers.append('Origin', '');

      console.log("");
     //let data = {username: username.toString(), password : password.toString()};
    const options = {responseType: 'text' as 'text'};
    const text = 'text'
    const requestOptions: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
     this.http.get<any>(url, requestOptions).subscribe((res) => {
       console.log(res)
       console.log("joao")
       this.imgDownloadChanger.next(res);
     },(err:HttpErrorResponse)=>{
      console.log(err)
    });

  }
}
