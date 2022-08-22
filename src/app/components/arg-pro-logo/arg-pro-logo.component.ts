import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arg-pro-logo',
  templateUrl: './arg-pro-logo.component.html',
  styleUrls: ['./arg-pro-logo.component.css']
})
export class ArgProLogoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){ 
    this.router.navigate(['/iniciar-sesion'])
  }

}
