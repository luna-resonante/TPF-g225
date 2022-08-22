import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { SProyectosService } from 'src/app/services/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private sproyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyectos = new Proyectos(this.nombreE, this.descripcionE);
    this.sproyectos.save(proyectos).subscribe(data => {
      alert("Proyectos añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
