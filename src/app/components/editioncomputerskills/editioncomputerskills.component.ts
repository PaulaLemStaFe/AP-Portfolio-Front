import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Computerskill } from 'src/app/models/computerskill';
import { ComputerskillService } from 'src/app/services/computerskill.service';

@Component({
  selector: 'app-editioncomputerskills',
  templateUrl: './editioncomputerskills.component.html',
  styleUrls: ['./editioncomputerskills.component.css']
})
export class EditioncomputerskillsComponent implements OnInit {

  computerskills: Computerskill[] = [];
  editComputerSkill: Computerskill | undefined;
  deleteComputerSkill: Computerskill | undefined;

  constructor(private computerskillService: ComputerskillService) { }

  ngOnInit(): void {
    this.getComputerSkills();
  }

  getComputerSkills(): void {
    this.computerskillService.getComputerSkills().subscribe(
      data => {
        this.computerskills = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public onOpenModal(mode: String, computerskill?: Computerskill): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('buttoon');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addComputerSkillModal');
    } else if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteComputerSkillModal');
      this.deleteComputerSkill = computerskill;
    } else if (mode === 'edit') {
      button.setAttribute('data-target', '#editComputerSkillModal');
      this.editComputerSkill = computerskill;
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddComputerSkill(addForm: NgForm): void {
    document.getElementById('addComputerSkillModal')?.click();
    this.computerskillService.createComputerSkill(addForm.value).subscribe({
      next: (response:Computerskill) => {
        this.getComputerSkills();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onEditComputerSkill(computerskill: Computerskill){
    this.editComputerSkill=computerskill;
    document.getElementById('editComputerSkillModal')?.click();
    this.computerskillService.editComputerSkill(computerskill).subscribe({
      next: (response:Computerskill) => {
        console.log(response);
        this.getComputerSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteComputerSkill(idComputerSkill:number) {
    this.computerskillService.deleteComputerSkill(idComputerSkill).subscribe({
      next: (response:void)=>{
        this.getComputerSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}