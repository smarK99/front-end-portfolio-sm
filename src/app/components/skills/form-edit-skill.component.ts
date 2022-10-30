import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-form-edit-skill',
  templateUrl: './form-edit-skill.component.html',
  styleUrls: ['./form-edit-skill.component.css']
})
export class FormEditSkillComponent implements OnInit {
  skill: Skill = new Skill("", 0);

  constructor(private skillServ: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idSkill = this.activatedRoute.snapshot.params['idSkill'];
    this.skillServ.detail(idSkill).subscribe(
      data => {
        this.skill = data;
      }, err =>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const idSkill = this.activatedRoute.snapshot.params['idSkill'];
    this.skillServ.update(idSkill, this.skill).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }

}
