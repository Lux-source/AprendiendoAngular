import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MiComponente } from './componentes/mi-componente/mi-componente.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PruebasComponent,
    ErrorComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
