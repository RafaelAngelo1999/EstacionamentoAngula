import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common'
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ClienteModel } from '../../compartilhado/model/cliente';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listClienteChange = new Subject<any>();
  isEdit = false;
  cliente;

  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  addCliente(form) {
    console.log(form.value);
    return this.http.post<ClienteModel>('/api/cliente', form.value).subscribe(res => {
      this.listClienteChange.next(res);
    },(err:HttpErrorResponse)=>{
      this.listClienteChange.next(false);
    });
  }

  updateCliente(form) {
    console.log(form.value);
    return this.http.put<ClienteModel>('/api/cliente', form.value).subscribe(res => {
      this.listClienteChange.next(res);
    },(err:HttpErrorResponse)=>{
      this.listClienteChange.next(false);
    });
  }

  getCliente() {
    return this.http.get<ClienteModel>('/api/cliente').subscribe(res => {
      this.listClienteChange.next(res);
    },(err:HttpErrorResponse)=>{
      this.listClienteChange.next(false);
    });
  }

  // insertEmployee(cliente) {
  //   this.clienteList.push({
  //     fullName: cliente.fullName,
  //     email: cliente.email,
  //     mobile: cliente.mobile,
  //     city: cliente.city,
  //     gender: cliente.gender,
  //     department: cliente.department,
  //      hireDate: cliente.hireDate == "" ? "" : this.datePipe.transform(cliente.hireDate, 'yyyy-MM-dd'),
  //     isPermanent: cliente.isPermanent
  //   });
  // }

  updateEmployee(employee) {
    // this.employeeList.update(employee.$key,
    //   {
    //     fullName: employee.fullName,
    //     email: employee.email,
    //     mobile: employee.mobile,
    //     city: employee.city,
    //     gender: employee.gender,
    //     department: employee.department,
    //      hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
    //     isPermanent: employee.isPermanent
    //   });
  }

  deleteEmployee($key: string) {
    // this.employeeList.remove($key);
  }

}