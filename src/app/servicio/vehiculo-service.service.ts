import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {
  private urlApi= 'vehiculos'

  private urlApiPosts='vehiculos'
  private urlApiDelete='vehiculos'
  private urlApiGet='vehiculos'
  private urlApiPut='vehiculos';
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
    return this.http.delete(this.urlApi + codvehiculo);
  }
  public obtenerVehiculo(codvehiculo: string){
    console.log(codvehiculo);
    return this.http.get(this.urlApi + codvehiculo);
  }

  public actualizarVehiculo(data:any){
    console.log(data);
    return this.http.put(this.urlApi, data);
  }
}
