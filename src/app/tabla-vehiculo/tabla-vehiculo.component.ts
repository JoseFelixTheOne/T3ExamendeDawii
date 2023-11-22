import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoEntity } from '../modelo/vehiculo-entity';
import { VehiculoServiceService } from '../servicio/vehiculo-service.service';

@Component({
  selector: 'app-tabla-vehiculo',
  templateUrl: './tabla-vehiculo.component.html',
  styleUrls: ['./tabla-vehiculo.component.css']
})
export class TablaVehiculoComponent implements OnInit{

  data: any[] = [];
  vehiculoArray: VehiculoEntity[] = [];
  constructor(private apiService:VehiculoServiceService, private router:Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data = data;
      this.vehiculoArray =  data;
    })
  }

  nuevo(){
    this.router.navigate(["ingresar"]);
  }

  eliminar(codvehiculo: string){
    this.apiService.eliminarVehiculo(codvehiculo).subscribe(result=>{
      this.llenarData();
    })
  }

  actualizar(codvehiculo: string){
    this.apiService.codigo=codvehiculo;
    this.router.navigate(["actualizar"]);
  }

}
