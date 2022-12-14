import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL='http://localhost:8080/auth/';
  //authURL='https://bendportfoliowjgz.herokuapp.com/';
  authURL= environment.URL+'auth/';
  
  

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }


  public nuevo(nuevoUsuario:NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();

}
}
