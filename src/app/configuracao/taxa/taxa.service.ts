import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TaxaService {

  constructor(private datePipe: DatePipe) { }

  employeeList: Array<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fracao: new FormControl('', Validators.required),
    meiaHora: new FormControl('', Validators.required),
    umaHora: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fracao: '',
      meiaHora: '',
      umaHora: '',
    });
  }


  getEmployees() {
    // this.employeeList = this.firebase.list('employees');
    // return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
       hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
      isPermanent: employee.isPermanent
    });
  }

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

  populateForm(employee) {
    //this.form.setValue(_.omit(employee,'departmentName'));
  }
}