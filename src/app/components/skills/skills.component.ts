import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillServ: SkillService, private token: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadSkills(): void{
    this.skillServ.list()
      .subscribe(data => {this.skill = data;})
  }

  delete(idSkill?: number): void{
    if(idSkill != undefined){
      this.skillServ.delete(idSkill).subscribe(
        data => {
          this.loadSkills();
        }, err => {
          alert("No se pudo borrar la skill")
        }
      )
    }
  }

}
