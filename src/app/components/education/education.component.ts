import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private eduServ: EducacionService, private token: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadEducacion();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadEducacion(): void{
    this.eduServ.list().subscribe(
      data => {
        this.edu = data;
      }
    )
  }

  delete(idEducacion?: number){
    if(idEducacion != undefined){
      this.eduServ.delete(idEducacion).subscribe(
        data => {
          this.loadEducacion();
        }, err =>{
          alert("No se pudo eliminar la educación");
        }
      )
    }
  }
}
