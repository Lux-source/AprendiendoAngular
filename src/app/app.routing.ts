// Importar los módulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from './componentes/home/home.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { ErrorComponent } from './componentes/error/error.component';

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:appellidos', component: PaginaComponent},
    {path:'**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);