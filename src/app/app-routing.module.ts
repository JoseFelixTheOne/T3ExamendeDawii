import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormVehiculoComponent } from './form-vehiculo/form-vehiculo.component';
import { TablaVehiculoComponent } from './tabla-vehiculo/tabla-vehiculo.component';
import { FormVehiculoActComponent } from './form-vehiculo-act/form-vehiculo-act.component';

const routes: Routes = [
  {path: 'listar', component:TablaVehiculoComponent},
  {path: 'ingresar', component:FormVehiculoComponent},
  {path: 'actualizar', component:FormVehiculoActComponent},
  {path: '**', redirectTo: 'listar'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
