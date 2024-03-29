import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';


@Injectable({
  providedIn: 'root'
})
export class SProyectosService {
  expURL="http://localhost:8080/proyectos/";
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get <Proyectos[]>(this.expURL + 'lista');
  }

  public detail (id:number):Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.expURL + `detail/${id}`)
  }

  public save (proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create' , proyectos);
  }

  public update ( id: number , proyectos: Proyectos ): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, proyectos);
  }

  public delete ( id: number ): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
