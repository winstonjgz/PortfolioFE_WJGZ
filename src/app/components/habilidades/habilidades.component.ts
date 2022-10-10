import { Component, OnInit } from '@angular/core';
import { Hysoft } from 'src/app/model/Hysoft';
import { HysoftService } from 'src/app/services/hysoft.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Hysoft[]=[];

  constructor(
    private sHabilidad:HysoftService, private tokenService: TokenService
  ) { }
    isLogged=false;
    
  ngOnInit(): void {
    this.cargarHabilidades;
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged= false;
    }
  }

  cargarHabilidades(): void{
    this.sHabilidad.lista().subscribe(
      
      data=> {
        this.habilidad=data;
      }
      )
    }

    delete(id: number){
      if(id != undefined){
        this.sHabilidad.delete(id).subscribe(
          data => {
            this.cargarHabilidades();
          }, err =>{
            alert('No se pudo borrar la habilidad');
          }
        )
      }
    }
}

  


