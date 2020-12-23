import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../../compartilhado/service/notification.service';
import { ClienteService } from '../cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(public service: ClienteService,
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
  clienteList: Array<any>;
  cliente: any;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cpf: new FormControl(''),
    telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    ativo: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      ativo: false
    });
  }
    dataSourceVeiculos: MatTableDataSource<any> = new MatTableDataSource(this.frutas);



  ngOnInit() {
    this.initializeFormGroup();  
    if(this.service.isEdit)
      this.form.setValue({
        id : this.service.cliente.id,
        nome : this.service.cliente.nome,
        cpf : this.service.cliente.cpf,
        email : this.service.cliente.email,
        telefone : this.service.cliente.telefone,
        ativo : this.service.cliente.ativo,

      })
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.form.valid) {
      if (!this.form.get('id').value)
        this.service.addCliente(this.form);
      else
      this.service.updateCliente(this.form);
      this.form.reset();
      this.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.form.reset();
    this.initializeFormGroup();
    this.dialogRef.close();
  }
  populateForm(cliente) {
    this.form.setValue(cliente);
    console.log(this.form);
    }

  onEdit(row){
    //this.service.populateForm(row);
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