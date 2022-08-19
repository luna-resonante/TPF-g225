import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
educacion : Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert('Error al modificar la educación');
      this.router.navigate(['']);
    }
    )
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert('Error al modificar la educación');
        this.router.navigate(['']);
      }
    )
  }

}
