import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience'
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = []
  constructor(private experienceService:ExperienceService) { }
  ngOnInit(): void {
    this.getAll();
    let exper1 = new Experience(1,"Futbolista", "Patronato", 12 )
    this.experiences.push(exper1)
    this.experiences.push(new Experience(2,"Developer", "Securita", 55 ))
    this.experiences.push(new Experience(3, "Docente", "Argentina Programa 2022", 22 ))
  }
  getAll(){
    this.experiences= this.experienceService.getAllExperiencias()

}
}
