import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = environment.URL + 'skill/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL + 'list');
  }

  public detail(idSkill: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL + `detail/${idSkill}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.http.post<any>(this.URL + 'create', skill);
  }

  public update(idSkill: number, skill: Skill): Observable<any>{
    return this.http.put<any>(this.URL + `update/${idSkill}`, skill);
  }

  public delete(idSkill: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idSkill}`);
  }
}
