import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Huespedes, listaHuespedes } from 'src/app/interfaces/huespedes';

function search(text: string): Huespedes[] {
  return listaHuespedes.filter(cliente => {
    const term = text.toLowerCase();
    return cliente.dni.includes(term)
    // || pipe.transform(country.area).includes(term)
    // || pipe.transform(country.population).includes(term);
  });
}
@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit {
  huespedes$: Observable<Huespedes[]>;
  filter = new FormControl('');

  constructor() {
    this.huespedes$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }
  ngOnInit(): void {
  }

}

