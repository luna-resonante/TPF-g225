import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  expLab: Experience = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert('Error al modificar la experiencia');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert('Error al modificar la experiencia');
      this.router.navigate(['']);
    }
    )
  }

}
