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
    
  }
  }
