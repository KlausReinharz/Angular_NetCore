import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { EmpleadoComponent } from './Pages/empleado/empleado.component';


const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'empleado/:id',
    component:EmpleadoComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
