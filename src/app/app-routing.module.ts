/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { MainComponent } from '../app/components/main/main.component';

import { RegisterComponent } from './components/register/register.component';
//import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'main', component: MainComponent},
  //{path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},

  //{path:'main', pathMatch:'full', redirectTo:'/main', component: MainComponent},
  //{path:'main', component:MainComponent, ...canActivate(()=> redirectUnauthorizedTo(['/register']))},
  // {path:'', component: MainComponent},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  //{path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'editexperiencia/:id', component: EditExperienciaComponent},
  {path:'edit-educacion/:id', component: EditEducacionComponent},
  {path:'nueva-educacion', component: NuevaEducacionComponent},
  {path:'nueva-experiencia', component: NuevaExperienciaComponent},
  {path:'nuevahabilidad', component: NuevaHabilidadComponent},
  //  {path:'nuevahabilidad/:id', component: NuevaHabilidadComponent},

  //{path:'explab', component: ExperienciaComponent},
  {path:'edithabilidad/:id', component: EditHabilidadComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

