import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoServiceService } from '../servicio/vehiculo-service.service';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit{

  frmVehiculo = new FormGroup({
    codvehiculo: new FormControl(''), 
    modelo: new FormControl(''),
    marca: new FormControl(''),
    color: new FormControl(''),
    traccion: new FormControl(''),
    transmision: new FormControl(''),
    asiento: new FormControl(''),
  })

  constructor(private vehiculoService: VehiculoServiceService, private router: Router){}

  guardarVehiculo(){
    this.vehiculoService.guardarDataVehiculo(this.frmVehiculo.value).subscribe(result=>{
      this.frmVehiculo.reset;
      this.router.navigate(["listar"]);
    })
  }

  listar(){
    this.router.navigate(["listar"]);
  }
  
  ngOnInit(): void {
  }

}
