import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'habitaciones', component: HabitacionesComponent
  },
  {
    path: 'registro', component: RegistroClienteComponent
  },
  {
    path: 'huespedes', component: HuespedesComponent
  },
  {
    path: 'reservar', component: ReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
