import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad : Habilidad = null;

  constructor(private sHabilidad: HabilidadService, private activatedRouter: ActivatedRoute, 
    private router: Router) { }


    ngOnInit(): void {
      const id= this.activatedRouter.snapshot.params['id'];
      this.sHabilidad.details(id).subscribe(
        data => {
          this.habilidad = data;
        }, err =>{
          alert('Error al modificar experiencia');
          this.router.navigate(['']);
        }
      )
        
    }
  
    onUpdate(): void{
      const id= this.activatedRouter.snapshot.params['id'];
      this.sHabilidad.update(id, this.habilidad).subscribe(  
        data=> {
          this.router.navigate(['']);
  
        }, err =>{
          alert('Error al modificar habilidad');
          this.router.navigate(['']);
        } 
      )
    }
  
  
  }
  