import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LibroclickedService } from './libroclicked.service';

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { RendererdemoComponent } from './rendererdemo/rendererdemo.component';

import { RUTAS } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    SobreNosotrosComponent,
    CabeceraComponent,
    InicioComponent,
    Error404Component,
    DetalleLibroComponent,
    RendererdemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS, { useHash: true }),
    HttpClientModule
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
