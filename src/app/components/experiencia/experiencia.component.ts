import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[]=[];

  constructor(
    private sExperiencia:SExperienciaService, private tokenService: TokenService
  ) { }


    isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged= false;
    }


  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(
      data => {this.experiencia = data;}
    )
  }



}


