import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//Monitorea lo que pasa con la informacion
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: String = 'http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  //Observable para peticiones asyncronas
  // public getPersona(): Observable<persona>{
  //   return this.http.get<persona>(this.URL+'perfil');//Llamada al back
  // }

  // public getAboutMe(): Observable<string>{
  //   return this.http.get<>
  // }

  public list(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'list');
  }

  public detail(idPersona: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `detail/${idPersona}`);
  }

  public update(idPersona: number, persona:Persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idPersona}`, persona);
  }

}
