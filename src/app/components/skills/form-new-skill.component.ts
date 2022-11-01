import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-form-new-skill',
  templateUrl: './form-new-skill.component.html',
  styleUrls: ['./form-new-skill.component.css']
})
export class FormNewSkillComponent implements OnInit {
  nombreSkill: string = "";
  porcentaje: number = 0;

  constructor(private skillServ: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  //Solucionar problema con el err
  onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.porcentaje);
    this.skillServ.save(skill).subscribe(
      data => {
      alert("Skill agregada exitosamente!");
      this.router.navigate(['']);
    }, err => { 
      alert("Skill agregada exitosamente!");
      this.router.navigate(['']);
    }
    )
  }
}
