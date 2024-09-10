import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { appsetting } from '../Settings/appsettings';
import { Empleado } from '../Models/Empleado';
import { ResponseApi } from '../Models/ResponseApi';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  private http=inject(HttpClient);
  private apiUrl:string = appsetting.apiUrl+"Empleado"

  constructor() { }

  list(){
   return  this.http.get<Empleado[]>(this.apiUrl);
  }

  obtener(id:number){
    return  this.http.get<Empleado>(`${this.apiUrl}/${id}`);
   }

   crear(objeto:Empleado){
      return this.http.post<ResponseApi>(this.apiUrl, objeto);
   }

   editar(objeto:Empleado){
    return this.http.put<ResponseApi>(this.apiUrl, objeto);
   }

   eliminar(id:number){
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${id}`)
   }

}
