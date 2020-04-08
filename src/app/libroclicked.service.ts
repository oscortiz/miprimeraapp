import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libros: Array<object>;

  constructor() {
    this.libros = [];
  }

  libroVisto(libroVisto) {
    if (!this.libros.some((libro: any) => libro.id == libroVisto.id))
      this.libros.push(libroVisto);
  }

  verListado() {
    if (this.libros.length > 0)
      return this.libros;

    return false;
  }
}
