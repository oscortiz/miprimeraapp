import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.css']
})
export class DetalleLibroComponent implements OnInit {

  libros: Array<object>;
  //libroId: number;
  libroClick: any;
  
  constructor(private activatedRoute:ActivatedRoute) {
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza', imagen: 'assets/imagenes/robert.png'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro', imagen: 'assets/imagenes/julia.jpg'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo', imagen: 'assets/imagenes/javier.jpg'},
      {id:'4', titulo: 'Y Julia retó a los dioses', autor:'Santiago Posteguillo', imagen: 'assets/imagenes/santiago.jpg'},
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza', imagen: 'assets/imagenes/robert.png'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro', imagen: 'assets/imagenes/julia.jpg'},
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza', imagen: 'assets/imagenes/robert.png'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo', imagen: 'assets/imagenes/javier.jpg'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro', imagen: 'assets/imagenes/julia.jpg'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo', imagen: 'assets/imagenes/javier.jpg'}
    ];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //this.libroId = params['libroId'];
      //this.libroClick = this.libroBuscador(params['libroId']);
      this.libroClick = this.libros.filter((libro: any) => libro.id == params['libroId'])[0];
    })
  }
/*
  libroBuscador(_libroId) {
    return this.libros.filter((libro: any) => libro.id == _libroId)[0];
  }
*/
}
