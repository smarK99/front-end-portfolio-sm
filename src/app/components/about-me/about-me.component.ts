import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "");

  constructor(public personaService: PersonaService) { }

  //Tareas de inicializacion(apenas se carga la pagina)
  ngOnInit(): void {
    this.loadPersona();
  }

  loadPersona(){
    //Con el suscribe detecto cada vez que el observable hace algo 
    this.personaService.detail(4).subscribe(data => {this.persona = data})
  }

}
