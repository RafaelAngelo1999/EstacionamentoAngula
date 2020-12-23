import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../../compartilhado/service/notification.service';
import { ClienteService } from '../cliente.service';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteModel } from 'src/app/compartilhado/model/cliente';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-grid',
  templateUrl: './cliente-grid.component.html',
  styleUrls: ['./cliente-grid.component.css']
})
export class ClienteGridComponent implements OnInit {
  subsListClienteChanger: Subscription;

  constructor(private service: ClienteService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  // frutas = [{nome: "rafael" , cpf: '123' , telefone: "1,0079" , veiculos: 'H' },
  // {nome: "gabriel" , cpf: '312' , telefone: "1,0079" , veiculos: 'I' }];
  listCliente;
  listData = new MatTableDataSource<ClienteModel>();
  displayedColumns: string[] = ['nome', 'cpf', 'telefone', 'veiculos', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.listCliente = this.service.getCliente();
    this.listData = new MatTableDataSource<ClienteModel>(this.listCliente);

    this.service.getCliente();
    this.subsListClienteChanger = this.service.listClienteChange.subscribe((response) => {
      this.listData = new MatTableDataSource<ClienteModel>(response.msg);
      console.log(response.msg,this.listData )
    });

    console.log(this.listData,this.listCliente )
    // this.service.getEmployees().subscribe(
    //   list => {
    //     let array = list.map(item => {
    //       let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
    //       return {
    //         $key: item.key,
    //         departmentName,
    //         ...item.payload.val()
    //       };
    //     });
    //     this.listData = new MatTableDataSource(array);
    //     this.listData.sort = this.sort;
    //     this.listData.paginator = this.paginator;
    //     this.listData.filterPredicate = (data, filter) => {
    //       return this.displayedColumns.some(ele => {
    //         return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
    //       });
    //     };
    //   });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    this.service.isEdit = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%%";
    this.dialog.open(ClienteFormComponent,dialogConfig);
  }

  onEdit(row){
    this.service.cliente = row;
    this.service.isEdit = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "90%";
    dialogConfig.height = "70%%";
    this.dialog.open(ClienteFormComponent,dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee($key);
    this.notificationService.warn('! Deleted successfully');
    }
  }
}