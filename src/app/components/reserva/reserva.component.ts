import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor() { }

  model: NgbDateStruct = {
    day: 0,
    month: 0,
    year: 0
  };
  ngOnInit(): void {
  }

}
