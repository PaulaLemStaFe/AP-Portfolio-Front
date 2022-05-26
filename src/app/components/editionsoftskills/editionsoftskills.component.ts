import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-editionsoftskills',
  templateUrl: './editionsoftskills.component.html',
  styleUrls: ['./editionsoftskills.component.css']
})
export class EditionsoftskillsComponent implements OnInit {

  projects: Project[] = [];
  editProject: Project | undefined;
  deleteProject: Project | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
