import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//import { AuthService } from 'src/app/services/auth.service';
//import { TokenService } from 'src/app/services/token.service';
//import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    //private userService: UserService,
    //private userLogin: AuthService,
    private router: Router,
   // private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  //onClick(){}
    /*this.userLogin.onLogout()
      .then(()=>{
        this.router.navigate(['/register']);
      })
      .catch(error=>console.log(error));
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
} */
}
