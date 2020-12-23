import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NotificationService } from '../compartilhado/service/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClienteService } from '../cadastro/cliente/cliente.service';
import { TaxaFormComponent } from '../configuracao/taxa/taxa-form/taxa-form.component';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent {
isMenuOpen = true;
contentMargin = 240;


// onTaxa() {
//   this.service.initializeFormGroup();
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose = true;
//   dialogConfig.autoFocus = true;
//   dialogConfig.width = "60%";
//   this.dialog.open(TaxaFormComponent,dialogConfig);
// }

   onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private service: ClienteService,
    //private departmentService: DepartmentService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }
}
