import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  expe: Experience[] = []
  constructor(private sExperience: SExperienciaService, private tokenservice: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenservice.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

cargarExperiencia(): void {
  this.sExperience.lista().subscribe (data => {this.expe = data;})
}

delete(id?:number){
  if(id !=undefined){
    this.sExperience.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
          alert("No se pudo borrar la experiencia");
      }
    )
  }
}
}