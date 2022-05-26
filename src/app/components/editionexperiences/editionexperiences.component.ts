import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-editionexperiences',
  templateUrl: './editionexperiences.component.html',
  styleUrls: ['./editionexperiences.component.css']
})
export class EditionexperiencesComponent implements OnInit {

  experiences: Experience[] = [];
  editExperience: Experience | undefined;
  deleteExperience: Experience | undefined;

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

  public onOpenModal(mode: String, experience?: Experience): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('buttoon');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienceModal');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteExperienceModal');
      this.deleteExperience = experience;
    } else if (mode === 'edit') {
      button.setAttribute('data-target', '#editExperienceModal');
      this.editExperience = experience;
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddExperience(addForm: NgForm): void {
    document.getElementById('addExperienceModal')?.click();
    this.experienceService.createExperience(addForm.value).subscribe({
      next: (response:Experience) => {
        this.getExperiences();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditExperience(experience: Experience){
    this.editExperience=experience;
    document.getElementById('editExperienceModal')?.click();
    this.experienceService.editExperience(experience).subscribe({
      next: (response:Experience) => {
        console.log(response);
        this.getExperiences();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteExperience(idExperience:number) {
    this.experienceService.deleteExperience(idExperience).subscribe({
      next: (response:void)=>{
        this.getExperiences();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}