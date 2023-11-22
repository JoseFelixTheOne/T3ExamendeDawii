import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoServiceService } from '../servicio/vehiculo-service.service';
import { VehiculoEntity } from '../modelo/vehiculo-entity';
import { TablaVehiculoComponent } from '../tabla-vehiculo/tabla-vehiculo.component';

@Component({
  selector: 'app-form-vehiculo-marca',
  templateUrl: './form-vehiculo-marca.component.html',
  styleUrls: ['./form-vehiculo-marca.component.css']
})
export class FormVehiculoMarcaComponent implements OnInit {

  frmBuscar = new FormGroup({
    marca: new FormControl(''),
  })

  data: any[] = [];
  vehiculoArray: VehiculoEntity[] = [];
  constructor(private apiService:VehiculoServiceService, private router:Router,private tabla: TablaVehiculoComponent){}
  
  buscar(){
    const marca = this.frmBuscar.controls['marca'].value;
    this.apiService.obtenerVehiculoPorMarca(marca!).subscribe(data=>{
      this.tabla.data = data;
      this.tabla.vehiculoArray =  data;
    })
  }

  ngOnInit(): void {
  }

}
