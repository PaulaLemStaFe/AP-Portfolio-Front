import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private ruta:Router) {
    this.loginForm = this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  onEnviar(event:Event) {
    let userLogged ='invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if(this.loginForm.value.email === 'paulalemosdeveloper@gmail.com' && this.loginForm.value.password === 'Portfolio2022AP') {
        userLogged = 'login_valid';
        this.ruta.navigate(['/edition']);
      } else {
        userLogged = 'login_invalid';
        
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }
    return userLogged;

  }

  ngOnInit(): void {
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

}
