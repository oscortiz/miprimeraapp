import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {

  users: Array<object>;
  clearElement: HTMLElement;
  usuarioSesion: object = {};
  showModal: boolean = false;

  constructor(private render: Renderer2) {
    this.users = [
      {nombre: 'David', id: 1},
      {nombre: 'Antonio', id: 2},
      {nombre: 'Sergio', id: 3},
      {nombre: 'Óscar', id: 4}
    ];
  }

  ngOnInit(): void {
  }

  activeMethod(element: HTMLElement, user: any) {
    if (this.clearElement) {
      this.render.removeClass(this.clearElement, 'list-group-item-info');
      this.render.removeChild(this.clearElement, this.clearElement.childNodes[1]);
    }

    this.render.addClass(element, 'list-group-item-info');
    
    let nuevoElemento = this.render.createElement('button');
    this.render.setProperty(nuevoElemento, 'innerHTML', 'Iniciar sesión');    
    this.render.addClass(nuevoElemento, 'btn');
    this.render.addClass(nuevoElemento, 'btn-sm');
    this.render.addClass(nuevoElemento, 'btn-outline-secondary');
    this.render.addClass(nuevoElemento, 'float-right');    
    this.render.listen(nuevoElemento, 'click', event => {
      this.usuarioSesion = user.nombre;
      this.showModal = true;
    });
    this.render.appendChild(element, nuevoElemento);
    
    this.clearElement = element;    
  }

}
