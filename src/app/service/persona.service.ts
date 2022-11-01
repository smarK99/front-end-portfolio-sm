import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';//Monitorea lo que pasa con la informacion
import { Persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: String = environment.URL + 'persona/';

  constructor(private http:HttpClient) { }

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
