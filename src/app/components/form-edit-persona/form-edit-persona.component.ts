import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-form-edit-persona',
  templateUrl: './form-edit-persona.component.html',
  styleUrls: ['./form-edit-persona.component.css']
})
export class FormEditPersonaComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "");

  constructor(private personaServ: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imgServ: ImageService) { }
  ngOnInit(): void {
    const idPersona = this.activatedRouter.snapshot.params['idPersona'];
    this.personaServ.detail(idPersona).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Persona modificada exitosamente!");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const idPersona = this.activatedRouter.snapshot.params['idPersona'];
    this.persona.imgProfile = this.imgServ.url;
    //this.persona.imgBanner = this.imgServ.url;
    this.personaServ.update(idPersona, this.persona).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Persona modificada exitosamente!");
        this.router.navigate(['']);
      }
    )
  }
  

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgServ.uploadImage($event, name);
  }
}
