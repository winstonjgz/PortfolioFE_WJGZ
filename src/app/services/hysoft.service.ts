import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hysoft } from '../model/Hysoft';

@Injectable({
  providedIn: 'root'
})
export class HysoftService {

  habilidadURL=environment.URL+'rhysoft/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Hysoft[]>{
    return this.httpClient.get<Hysoft[]>(this.habilidadURL+ 'lista');

  }

  public details(id: number):Observable<Hysoft>{
    return this.httpClient.get<Hysoft>(this.habilidadURL+ `detail/${id}`);

  }

  public save(habilidad: Hysoft):Observable<any>{
    return this.httpClient.post<any>(this.habilidadURL+`crearHab`, habilidad);
  }

  public update(id: number, habilidad: Hysoft):Observable<any>{
    return this.httpClient.put<any>(this.habilidadURL +`update/${id}`, habilidad);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete(this.habilidadURL+`delete/${id}`);
    
  }

}
