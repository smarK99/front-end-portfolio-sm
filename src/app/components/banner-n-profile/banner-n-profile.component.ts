import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner-n-profile',
  templateUrl: './banner-n-profile.component.html',
  styleUrls: ['./banner-n-profile.component.css']
})
export class BannerNProfileComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "");

  constructor(public personaService: PersonaService, private token: TokenService) { }
  isLogged = false;

  //Tareas de inicializacion(apenas se carga la pagina)
  ngOnInit(): void {
    this.loadPersona();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadPersona(){
    //Con el suscribe detecto cada vez que el observable hace algo 
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }
  
}
