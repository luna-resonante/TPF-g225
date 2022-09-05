import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperiencesComponent } from './componentes/experiences/experiences.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/acercade/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiences/new-experiencia.component';
import { EditexperienciaComponent } from './componentes/experiences/editexperiencia.component';
import { NeweducacionComponent } from './componentes/acercade/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/acercade/educacion/editeducacion.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperiencesComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditexperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewProyectosComponent,
    EditproyectosComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
          
