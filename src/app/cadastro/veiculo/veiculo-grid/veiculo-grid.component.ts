import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from '../../../compartilhado/service/notification.service';
import { VeiculoService } from '../veiculo.service';
import { VeiculoFormComponent } from '../veiculo-form/veiculo-form.component';

@Component({
  selector: 'app-veiculo-grid',
  templateUrl: './veiculo-grid.component.html',
  styleUrls: ['./veiculo-grid.component.css']
})
export class VeiculoGridComponent implements OnInit {
  
  constructor(private service: VeiculoService,
    //private departmentService: DepartmentService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  frutas = [{placa: "rafael" , marca: '123' , modelo: "1,0079" , cor: 'H', cliente: 'rafael' },
  {placa: "rafael" , marca: '123' , modelo: "1,0079" , cor: 'H', cliente: 'gabriel' }];
  listData: MatTableDataSource<any> = new MatTableDataSource(this.frutas);
  displayedColumns: string[] = ['placa', 'marca', 'modelo', 'cor','cliente', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    console.log(this.listData)
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
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(VeiculoFormComponent,dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(VeiculoFormComponent,dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deleteEmployee($key);
    this.notificationService.warn('! Deleted successfully');
    }
  }
}