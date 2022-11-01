import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyServ: ProyectoService, private token: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadProjects();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadProjects(): void{
    this.proyServ.list()
      .subscribe(data => {this.proyecto = data;})
  }

  //Solucionar el problema con el err
  delete(idProyecto?: number): void{
    if(idProyecto != undefined){
      this.proyServ.delete(idProyecto).subscribe(
        data => {
          this.loadProjects();
        }, err => {
          alert("Proyecto borrado!");
          this.loadProjects();
         }
      )
    }
  }

}
