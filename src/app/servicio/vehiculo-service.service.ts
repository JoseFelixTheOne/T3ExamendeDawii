import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {
  private urlApi= 'vehiculos'
  private urlApiDelete='vehiculos/'
  private urlApiGet='vehiculos/'
  private urlApiGetMarca='vehiculos/marca/';
  codigo = "";

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get(this.urlApi);
  }

  public guardarDataVehiculo(data:any){
    console.log(data);
    return this.http.post(this.urlApi,data);
  }

  public eliminarVehiculo(codvehiculo: string){
    console.log(codvehiculo);
    return this.http.delete(this.urlApiDelete + codvehiculo);
  }
  public obtenerVehiculo(){
    console.log(this.codigo);
    return this.http.get<any>(this.urlApiGet + this.codigo);
  }

  public actualizarVehiculo(data:any){
    console.log(data);
    return this.http.put(this.urlApi, data);
  }

  public obtenerVehiculoPorMarca(marca: string){
    console.log(marca);
    return this.http.get<any>(this.urlApiGetMarca + marca);
  }
}
