import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL + 'project/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'list');
  }

  public detail(idProyecto: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL + `detail/${idProyecto}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.http.post<any>(this.URL + 'create', proyecto);
  }

  public update(idProyecto: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idProyecto}`, proyecto);
  }

  public delete(idProyecto: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idProyecto}`);
  }

}