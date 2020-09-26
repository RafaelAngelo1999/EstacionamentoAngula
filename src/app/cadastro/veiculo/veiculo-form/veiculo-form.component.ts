import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../../compartilhado/service/notification.service';
import { VeiculoService } from '../veiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  marcas: string[] = ['tudo', 'joia', 'comigo'];
  modelos: string[] = ['oi', 'tudobem', 'comvoce'];
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];



  constructor(public service: VeiculoService,
    private globalService: GlobalService,
    //private departmentService: DepartmentService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<VeiculoFormComponent>) { }
  displayedColumns: string[] = ['cod', 'placa', 'modelo', 'cor', 'actions'];
  frutas = [{ cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
  { cod: "rafael", placa: '123', modelo: "1,0079", cor: 'H' },
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
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    //this.dialog.open(ClienteComponent,dialogConfig);
  }
  teste() {
    console.log(this.service.form)
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteEmployee($key);
      this.notificationService.warn('! Deleted successfully');
    }
  }
  selectedStates = this.states;

  onKey(value) {
    this.selectedStates = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.states.filter(option => option.toLowerCase().startsWith(filter));
  }
}
