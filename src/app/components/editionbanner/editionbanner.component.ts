import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editionbanner',
  templateUrl: './editionbanner.component.html',
  styleUrls: ['./editionbanner.component.css']
})
export class EditionbannerComponent implements OnInit {

  public user: User | undefined;

  public editUser: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.userService.getUser().subscribe({
      next: (response: User) => {
        this.user = response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, user?: User): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('buttoon');
    //button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode==='edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#editUserModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onEditUser(user: User){
    this.editUser=user;
    document.getElementById('editUserModal')?.click();
    this.userService.editUser(user).subscribe({
      next: (response:User) => {
        console.log(response);
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}