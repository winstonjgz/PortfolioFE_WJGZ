import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habilidadURL=environment.URL+'/habilidad/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habilidadURL+ 'lista');

  }

  public details(id: number):Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habilidadURL+ `detail/${id}`);

  }

  public save(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.habilidadURL+'create', habilidad);
  }

  public update(id: number, habilidad: Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.habilidadURL +`update/${id}`, habilidad);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete(this.habilidadURL+`delete/${id}`);
    
  }

}
