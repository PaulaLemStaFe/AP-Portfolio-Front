import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-homeexperiences',
  templateUrl: './homeexperiences.component.html',
  styleUrls: ['./homeexperiences.component.css']
})
export class HomeexperiencesComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.experienceService.getExperiences().subscribe(
      data => {
        this.experiences = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}