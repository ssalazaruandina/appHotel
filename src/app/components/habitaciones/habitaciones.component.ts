import { Component, OnInit } from '@angular/core';
import { Habitacion, listaHabitaciones } from 'src/app/interfaces/habitaciones';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaHabitaciones: Habitacion[] = listaHabitaciones

}
