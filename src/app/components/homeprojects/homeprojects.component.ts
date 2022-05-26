import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-homeprojects',
  templateUrl: './homeprojects.component.html',
  styleUrls: ['./homeprojects.component.css']
})
export class HomeprojectsComponent implements OnInit {

  projects: Project[] = [];

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

}