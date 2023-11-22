import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoEntity } from '../modelo/vehiculo-entity';
import { VehiculoServiceService } from '../servicio/vehiculo-service.service';

@Component({
  selector: 'app-form-vehiculo-act',
  templateUrl: './form-vehiculo-act.component.html',
  styleUrls: ['./form-vehiculo-act.component.css']
})
export class FormVehiculoActComponent implements OnInit{

  frmVehiculo = new FormGroup({
    codvehiculo: new FormControl(''), 
    modelo: new FormControl(''),
    marca: new FormControl(''),
    color: new FormControl(''),
    traccion: new FormControl(''),
    transmision: new FormControl(''),
    asiento: new FormControl(''),
  })

  vehiculo: VehiculoEntity = new VehiculoEntity();

  constructor(private vehiculoService: VehiculoServiceService, private router: Router){}

  guardarVehiculo(){
    this.vehiculoService.actualizarVehiculo(this.frmVehiculo.value).subscribe(result=>{
      this.frmVehiculo.reset;
      this.router.navigate(["listar"]);
    })
  }

  llenarData(){
    this.vehiculoService.obtenerVehiculo().subscribe(data=>{
      this.vehiculo = data;
      this.frmVehiculo.controls['codvehiculo'].setValue(this.vehiculo.codvehiculo);
      this.frmVehiculo.controls['modelo'].setValue(this.vehiculo.modelo);
      this.frmVehiculo.controls['marca'].setValue(this.vehiculo.marca);
      this.frmVehiculo.controls['color'].setValue(this.vehiculo.color);
      this.frmVehiculo.controls['traccion'].setValue(this.vehiculo.traccion);
      this.frmVehiculo.controls['transmision'].setValue(this.vehiculo.transmision);
      this.frmVehiculo.controls['asiento'].setValue(""+this.vehiculo.asiento);
    })
  }

  listar(){
    this.router.navigate(["listar"]);
  }

  ngOnInit(): void {
    this.llenarData();
  }

}
