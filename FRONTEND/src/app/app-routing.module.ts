import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditexperienciaComponent } from './componentes/experiences/editexperiencia.component';
import { NewExperienciaComponent } from './componentes/experiences/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id' , component: EditexperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
