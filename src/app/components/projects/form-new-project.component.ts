import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-form-new-project',
  templateUrl: './form-new-project.component.html',
  styleUrls: ['./form-new-project.component.css']
})
export class FormNewProjectComponent implements OnInit {
  nombreProyecto: string = "";
  descripcionProy: string = "";
  urlProy: string = "";

  constructor(private proyServ: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  //Solucionar problema con el err
  onCreate(): void{
    const proyecto = new Proyecto(this.nombreProyecto, this.descripcionProy, this.urlProy);
    this.proyServ.save(proyecto).subscribe(
      data => {
      this.router.navigate(['']);
    }, err => { 
       alert("Proyecto creado exitosamente");
       this.router.navigate(['']);
     }
    )
  }

}
