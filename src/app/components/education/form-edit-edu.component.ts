import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-form-edit-edu',
  templateUrl: './form-edit-edu.component.html',
  styleUrls: ['./form-edit-edu.component.css']
})
export class FormEditEduComponent implements OnInit {
  edu: Educacion = new Educacion("", "");

  constructor(private eduServ: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  //Solucionar problema con el err
  ngOnInit(): void {
    const idEducacion = this.activatedRouter.snapshot.params['idEducacion'];
    this.eduServ.detail(idEducacion).subscribe(
      data => {
        this.edu = data;
      }, err => {
        alert("Educación agregada exitosamente!");
        this.router.navigate(['']);
      }
    )
  }

  //Solucionar problema con el err
  onUpdate(): void{
    const idEducacion = this.activatedRouter.snapshot.params['idEducacion'];
    this.eduServ.update(idEducacion, this.edu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Educación agregada exitosamente!");
        this.router.navigate(['']);
      }
    )
  }
}
