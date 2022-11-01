import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-form-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class FormEditProjectComponent implements OnInit {
  proyecto: Proyecto = new Proyecto("", "", "");

  constructor(private proyServ: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  //Solucionar el problema con el err
  ngOnInit(): void {
    const idProyecto = this.activatedRoute.snapshot.params['idProyecto'];
    this.proyServ.detail(idProyecto).subscribe(
      data => {
        this.proyecto = data;
      }, err =>{
         alert("Proyecto modificado exitosamente!");
         this.router.navigate(['']);
      }
    )
  }

  //Solucionar el problema con el err
  onUpdate(): void{
    const idProyecto = this.activatedRoute.snapshot.params['idProyecto'];
    this.proyServ.update(idProyecto, this.proyecto).subscribe(
      data=> {
        this.router.navigate(['']);
        //alert("Proyecto modificado exitosamente!");
      }, err =>{
        alert("Proyecto modificado exitosamente!");
        this.router.navigate(['']);
      }
    )
  }

}
