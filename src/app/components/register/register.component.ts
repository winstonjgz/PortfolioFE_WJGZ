import { Component, OnInit } from '@angular/core';
//import { Auth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
//import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg:FormGroup;

  constructor(
    private nuevoUsuario:AuthService,
    private router:Router, 
    private tokenService: TokenService

  ) { 
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  })
  }

  ngOnInit(): void {
  }

  onSubmit(){}
    /*console.log(this.formReg.value)*/
   /* this.nuevoUsuario.nuevo(this.formReg.value)
      .then(response =>{
        console.log(response);
        this.router.navigate(['/login']);  
      })
      .catch(error => console.log(error));
  } */
}
