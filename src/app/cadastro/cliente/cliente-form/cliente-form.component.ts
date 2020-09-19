import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../../compartilhado/service/notification.service';
import { ClienteService } from '../cliente.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(public service: ClienteService,
    //private departmentService: DepartmentService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ClienteFormComponent>) { }
    displayedColumns: string[] = ['cod', 'placa', 'modelo', 'cor', 'actions'];
    frutas = [{cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },
    {cod: "rafael" , placa: '123' , modelo: "1,0079" , cor: 'H' },



  ];
    dataSourceVeiculos: MatTableDataSource<any> = new MatTableDataSource(this.frutas);



  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertEmployee(this.service.form.value);
      else
      this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //this.dialog.open(ClienteComponent,dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee($key);
    this.notificationService.warn('! Deleted successfully');
    }
  }

}