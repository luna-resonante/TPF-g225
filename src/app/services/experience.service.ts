import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiencias: Experience[] = []

  constructor() { }
    
    getAllExperiencias(): Experience[] {
      let exper1 = new Experience()
      this.experiencias.push(exper1)
      this.experiencias.push(new Experience())
      this.experiencias.push(new Experience())
    return this.experiencias
    }

}
