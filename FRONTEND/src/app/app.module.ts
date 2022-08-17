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
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiences/new-experiencia.component';
import { EditexperienciaComponent } from './componentes/experiences/editexperiencia.component';



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
          
