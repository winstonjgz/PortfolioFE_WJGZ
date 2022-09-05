import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = "";
  descripcionExp: string = "";

  constructor(
    private sExperiencia:SExperienciaService, private router: Router
  ) { }

  ngOnInit(): void {
  }

onCreate(): void{
  const expe= new Experiencia(this.nombreExp, this.descripcionExp);
  this.sExperiencia.save(expe).subscribe(data => {
    alert("Experiencia anadida");
    this.router.navigate(['']);

}, err=>{
  alert("Falla en anadir");
  this.router.navigate([''])
}
)
}


}
