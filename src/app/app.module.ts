import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule, ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './avatar/avatar.component';
import { GlobalService } from '../app/global.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule, MatSnackBarConfig, MatSnackBar} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';
import { RootNavComponent } from './root-nav/root-nav.component';
import { ClienteGridComponent } from './cadastro/cliente/cliente-grid/cliente-grid.component';
import { ClienteFormComponent } from './cadastro/cliente/cliente-form/cliente-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { VeiculoGridComponent } from './cadastro/veiculo/veiculo-grid/veiculo-grid.component';
import { VeiculoFormComponent } from './cadastro/veiculo/veiculo-form/veiculo-form.component';
import { TaxaFormComponent } from './configuracao/taxa/taxa-form/taxa-form.component'


@NgModule({
   declarations: [
      AppComponent,
      MenuHeaderComponent,
      AvatarComponent,
      RootNavComponent,
      ClienteGridComponent,
      ClienteFormComponent,
      VeiculoGridComponent,
      VeiculoFormComponent,
      TaxaFormComponent,
      
      
   ],
   imports: [MatSliderModule,MatButtonModule,MatMenuModule, NgxMaskModule.forRoot(),
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTER),
      ReactiveFormsModule,
      HttpClientModule,
      GridModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      CommonModule,
      //MatSnackBarConfig,
      //MatSnackBar
   ],
   providers: [
      FormBuilder,
      DatePipe
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [A11yModule,
      ClipboardModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      DragDropModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
      OverlayModule,
      PortalModule,
      ScrollingModule,
      //MatSnackBarConfig,
      //MatSnackBar
   ]
})
export class AppModule { }
