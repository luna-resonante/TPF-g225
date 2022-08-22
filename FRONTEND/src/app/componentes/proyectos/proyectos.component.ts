import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { SProyectosService } from 'src/app/services/s-proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = []
  constructor(private sproyectos: SProyectosService, private tokenservice: TokenService) { }

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
  this.sproyectos.lista().subscribe (data => {this.proyectos = data;})
}

delete(id?:number){
  if(id !=undefined){
    this.sproyectos.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
          alert("No se pudo borrar el proyecto");
      }
    )
  }
}
}