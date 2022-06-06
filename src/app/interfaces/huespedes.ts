export interface Huespedes {
  codigo: string
  dni: string
  apellidoP: string
  apellidoM: string
  nombre: string
  fechaN: string
  sexo: string
  nacionalidad: string
  celular: string
  correoE: string
}

export let listaHuespedes: Huespedes[] = [
  {
    codigo: '00001',
    dni: '321983021',
    apellidoP: 'perez',
    apellidoM: 'xd',
    nombre: 'luis',
    fechaN: '10-02-1990',
    sexo: 'F',
    nacionalidad: 'Peru',
    celular: '98232910',
    correoE: 'perez@gmail.com'
  },
  {
    codigo: '00002',
    dni: '331983021',
    apellidoP: 'torres',
    apellidoM: 'xd',
    nombre: 'luis',
    fechaN: '10-02-1990',
    sexo: 'F',
    nacionalidad: 'Peru',
    celular: '98232910',
    correoE: 'perez@gmail.com'
  }
]
