import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + 'list');
  }

  public detail(idEducacion: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `detail/${idEducacion}`);
  }

  public save(edu: Educacion): Observable<any>{
    return this.http.post<any>(this.URL + 'create', edu);
  }

  public update(idEducacion: number, edu: Educacion): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idEducacion}`, edu);
  }

  public delete(idEducacion: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idEducacion}`);
  }
}
