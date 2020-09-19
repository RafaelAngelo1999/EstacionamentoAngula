import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ClienteGridComponent } from './cadastro/cliente/cliente-grid/cliente-grid.component';
import { VeiculoFormComponent } from './cadastro/veiculo/veiculo-form/veiculo-form.component';
import { VeiculoGridComponent } from './cadastro/veiculo/veiculo-grid/veiculo-grid.component';
import { TaxaFormComponent } from './configuracao/taxa/taxa-form/taxa-form.component';


export const ROUTER: Routes = [
  { path: '', component: AvatarComponent },
  { path: 'cliente', component: ClienteGridComponent },
  { path: 'veiculo', component: VeiculoFormComponent },
  { path: 'veiculoInfo', component: VeiculoGridComponent },
  { path: 'taxaInfo', component: TaxaFormComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
