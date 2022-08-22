import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/acercade/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/acercade/educacion/neweducacion.component';
import { EditexperienciaComponent } from './componentes/experiences/editexperiencia.component';
import { NewExperienciaComponent } from './componentes/experiences/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditexperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'nuevoproyecto', component:NewProyectosComponent},
  { path: 'editproyec/:id', component: EditproyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
