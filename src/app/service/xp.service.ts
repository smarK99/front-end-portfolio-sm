import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Xp } from '../model/xp';

@Injectable({
  providedIn: 'root'
})
export class XpService {
  xpURL= environment.URL + 'explab';

  constructor(private http: HttpClient) { }

  public list(): Observable<Xp[]>{
    return this.http.get<Xp[]>(this.xpURL + '/list');
  }

  public detail(idExp: number): Observable<Xp>{
    return this.http.get<Xp>(this.xpURL + `/detail/${idExp}`);
  }

  public create(xp: Xp): Observable<any>{
    return this.http.post<any>(this.xpURL + '/create', xp);
  }

  public update(idExp: number, xp: Xp): Observable<any>{
    return this.http.put<any>(this.xpURL + `/update/${idExp}`, xp);
  }

  public delete(idExp: number): Observable<any>{
    return this.http.delete<any>(this.xpURL + `/delete/${idExp}`);
  }
}
