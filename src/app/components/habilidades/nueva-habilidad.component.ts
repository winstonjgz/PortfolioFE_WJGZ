import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  nombre: string = "";
  porcentaje: number = 0;

  constructor(
    private sHabilidad:HabilidadService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habi= new Habilidad(this.nombre, this.porcentaje);
    this.sHabilidad.save(habi).subscribe(data => {
      alert("Habilidad agregada");
      this.router.navigate(['']);
  
  }, err=>{
    alert("Falla en agregar");
    this.router.navigate([''])
  }
  )
  }
}
