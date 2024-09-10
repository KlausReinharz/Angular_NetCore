import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  standalone:true,
  imports:[MatCardModule,MatTableModule,MatIconModule,MatButtonModule],
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  private empleadoServicio = inject(EmpleadoService);
  public listEmpleado:Empleado[]=[];
  public displayedColumns: string[]=['nombreCompleto','correo','sueldo','fechaContrato','accion'];

  obtenerEmpelado(){
    this.empleadoServicio.list().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listEmpleado = data;
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  constructor(private router:Router){
    this.obtenerEmpelado();
  }

  nuevo(){
      this.router.navigate(['/empleado',0]);
  }

  editar(objeto: Empleado){
    this.router.navigate(['/empleado',objeto.idEmpleado]);
  }

  eliminar(objeto: Empleado){
    if(confirm("Desea eliminar el empleado"+ objeto.nombreCompleto)){
      this.empleadoServicio.eliminar(objeto.idEmpleado).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.obtenerEmpelado();
          }else{
            alert("no se pudo eliminar empleado")
          }
        },
        error:(err)=>{
          console.log(err.message);
        }
      })
    }
  }


}
