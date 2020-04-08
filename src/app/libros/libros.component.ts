import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean;
  cargando: boolean;
    
  constructor(private http: HttpClient,
    public libroclicked: LibroclickedService) {

  }

  ngOnInit(): void {
    this.cargarLista();
    this.cargando = true;
  }

  cargarLista() {
    this.http.get('assets/lista-libros.json').subscribe(
      (respuesta: Response) => { this.libros = respuesta; this.cargando = false; },
      (respuesta: Response) => { this.errorHttp = true; this.cargando = false; }
    );
  }

  agregarLibro(_libroVisto) {
    this.libroclicked.libroVisto(_libroVisto);
  }

}
