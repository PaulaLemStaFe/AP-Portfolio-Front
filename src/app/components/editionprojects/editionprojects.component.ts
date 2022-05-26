import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-editionprojects',
  templateUrl: './editionprojects.component.html',
  styleUrls: ['./editionprojects.component.css']
})
export class EditionprojectsComponent implements OnInit {

  projects: Project[] = [];
  editProject: Project | undefined;
  deleteProject: Project | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(
      data => {
        this.projects = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOpenModal(mode: String, project?: Project): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('buttoon');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProjectModal');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteProjectModal');
      this.deleteProject = project;
    } else if (mode === 'edit') {
      button.setAttribute('data-target', '#editProjectModal');
      this.editProject = project;
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProject(addForm: NgForm): void {
    document.getElementById('addProjectModal')?.click();
    this.projectService.createProject(addForm.value).subscribe({
      next: (response:Project) => {
        this.getProjects();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditProject(project: Project){
    this.editProject=project;
    document.getElementById('editProjectModal')?.click();
    this.projectService.editProject(project).subscribe({
      next: (response:Project) => {
        console.log(response);
        this.getProjects();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProject(idProject:number) {
    this.projectService.deleteProject(idProject).subscribe({
      next: (response:void)=>{
        this.getProjects();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}