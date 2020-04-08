import { Routes } from '@angular/router';

import { LibrosComponent } from './libros/libros.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

export const RUTAS:Routes = [
    {path: 'listado-libros', component: LibrosComponent},
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: 'informacion/:libroId', component: DetalleLibroComponent},
    {path: 'informacion', redirectTo: 'inicio'},
    {path: 'inicio', component: InicioComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', component: Error404Component}
];