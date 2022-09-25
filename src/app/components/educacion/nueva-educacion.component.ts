import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombreEdu: string = "";
  descripcionEdu: string = "";

  constructor(
    private sEducacion:EducacionService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educ= new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(educ).subscribe(data => {
      alert("Educacion agregada");
      this.router.navigate(['']);
  
  }, err=>{
    alert("Falla en agregar");
    this.router.navigate([''])
  }
  )
  }
  

}
