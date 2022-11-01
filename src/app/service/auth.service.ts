import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DtoJwt } from '../model/dto-jwt';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.URL + 'auth/';

  constructor(private http: HttpClient) {

  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<DtoJwt>{
    return this.http.post<DtoJwt>(this.authURL + 'login', loginUsuario) 
  }
}
