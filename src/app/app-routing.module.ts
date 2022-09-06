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
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { MainComponent } from '../app/components/main/main.component';

import { RegisterComponent } from './components/register/register.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';


const routes: Routes = [
  {path:'main', component: MainComponent},
  //{path:'', redirectTo:'iniciar-sesion', pathMatch:'full'},

  {path:'', pathMatch:'full', redirectTo:'/main'},
  {path:'main', component:MainComponent, ...canActivate(()=> redirectUnauthorizedTo(['/register']))},
  // {path:'', component: MainComponent},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  {path:'iniciar-sesion', component: IniciarSesionComponent},
  {path:'nueva-experiencia', component: NuevaExperienciaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

