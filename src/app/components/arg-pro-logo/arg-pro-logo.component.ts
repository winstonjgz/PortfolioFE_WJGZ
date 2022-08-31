import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-arg-pro-logo',
  templateUrl: './arg-pro-logo.component.html',
  styleUrls: ['./arg-pro-logo.component.css']
})
export class ArgProLogoComponent implements OnInit {

  isLogged= false;

  constructor(
    private router: Router, private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;

    }else{
      this.isLogged=false;
    }
  }


  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){ 
    this.router.navigate(['/login'])
  }

}
