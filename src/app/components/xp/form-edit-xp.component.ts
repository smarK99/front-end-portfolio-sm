import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Xp } from 'src/app/model/xp';
import { XpService } from 'src/app/service/xp.service';

@Component({
  selector: 'app-form-edit-xp',
  templateUrl: './form-edit-xp.component.html',
  styleUrls: ['./form-edit-xp.component.css']
})
export class FormEditXpComponent implements OnInit {
  xp: Xp = new Xp("", "");

  constructor(private xps: XpService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idExperiencia = this.activatedRouter.snapshot.params['idExperiencia'];
    this.xps.detail(idExperiencia).subscribe(
      data => {
        this.xp = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const idExperiencia = this.activatedRouter.snapshot.params['idExperiencia'];
    this.xps.update(idExperiencia, this.xp).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
