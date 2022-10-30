import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-form-new-edu',
  templateUrl: './form-new-edu.component.html',
  styleUrls: ['./form-new-edu.component.css']
})
export class FormNewEduComponent implements OnInit {
  nombreEdu: string = "";
  descripcionEdu: string = "";

  constructor(private eduServ: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.eduServ.save(edu).subscribe(
      data =>{
        alert("Educación agregada exitosamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al crear educación");
        this.router.navigate(['']);
      }
    )
  }
}
