import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { SProyectosService } from 'src/app/services/s-proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})

export class EditproyectosComponent implements OnInit {
  proyectos : Proyectos = null;

  constructor(private sproyectos: SProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sproyectos.update(id, this.proyectos).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert('Error al modificar el proyecto');
      this.router.navigate(['']);
    }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sproyectos.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert('Error al modificar el proyecto');
        this.router.navigate(['']);
      }
    )
  }

}
