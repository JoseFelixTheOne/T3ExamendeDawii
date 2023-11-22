import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormVehiculoComponent } from './form-vehiculo/form-vehiculo.component';
import { TablaVehiculoComponent } from './tabla-vehiculo/tabla-vehiculo.component';
import { FormVehiculoActComponent } from './form-vehiculo-act/form-vehiculo-act.component';

@NgModule({
  declarations: [
    AppComponent,
    FormVehiculoComponent,
    TablaVehiculoComponent,
    FormVehiculoActComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
