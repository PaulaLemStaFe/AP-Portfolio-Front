import { Component, OnInit } from '@angular/core';
import { Computerskill } from 'src/app/models/computerskill';
import { ComputerskillService } from 'src/app/services/computerskill.service';

@Component({
  selector: 'app-homecomputerskills',
  templateUrl: './homecomputerskills.component.html',
  styleUrls: ['./homecomputerskills.component.css']
})
export class HomecomputerskillsComponent implements OnInit {

  computerskills: Computerskill[] = [];

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

}