import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperiencesComponent } from './componentes/experiences/experiences.component';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from './componentes/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AcercadeComponent,
    ExperiencesComponent,
    ExperienceComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
