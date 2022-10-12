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
    return this.httpClient.get<Hysoft[]>(this.habilidadURL + 'lista');
  
  }
  
  public detail(id: number): Observable<Hysoft>{
    return this.httpClient.get<Hysoft>(this.habilidadURL + `detail/${id}`);
  
  }
  
  public save(hysoft: Hysoft): Observable<any>{
    return this.httpClient.post<any>(this.habilidadURL + `create`, hysoft);
  }
  
  public update(id: number, hysoft: Hysoft): Observable<any>{
    return this.httpClient.put<any>(this.habilidadURL +`update/${id}`, hysoft);
  
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.habilidadURL +`delete/${id}`);
  
  }
  
}
