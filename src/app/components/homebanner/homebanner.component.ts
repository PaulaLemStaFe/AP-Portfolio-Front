import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.css']
})
export class HomebannerComponent implements OnInit {

  public user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (response: User) => {
        this.user = response;
        console.log(response);
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}