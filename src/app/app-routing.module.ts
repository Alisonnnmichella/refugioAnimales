import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MascotasListarComponent } from './mascotas/mascotas-listar/mascotas-listar.component';
import { MascotasAgregarComponent } from './mascotas/mascotas-agregar/mascotas-agregar.component';
import { MascotasEditarComponent } from './mascotas/mascotas-editar/mascotas-editar.component';
import { MascotasTarjetaComponent } from './mascotas/mascotas-tarjeta/mascotas-tarjeta.component';
import { MascotasAdoptarComponent } from './mascotas/mascotas-adoptar/mascotas-adoptar.component';




const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'mascotas-listar', component: MascotasListarComponent },
  { path: 'mascotas-agregar', component: MascotasAgregarComponent },
  { path: 'mascotas-editar/:id', component: MascotasEditarComponent },
  { path: 'mascotas-adoptar', component: MascotasAdoptarComponent },
  { path: 'mascotas-tarjeta/:id', component: MascotasTarjetaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
