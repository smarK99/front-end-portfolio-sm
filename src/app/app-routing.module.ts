import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditEduComponent } from './components/education/form-edit-edu.component';
import { FormNewEduComponent } from './components/education/form-new-edu.component';
import { FormEditPersonaComponent } from './components/form-edit-persona/form-edit-persona.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormEditProjectComponent } from './components/projects/form-edit-project.component';
import { FormNewProjectComponent } from './components/projects/form-new-project.component';
import { FormEditSkillComponent } from './components/skills/form-edit-skill.component';
import { FormNewSkillComponent } from './components/skills/form-new-skill.component';
import { FormEditXpComponent } from './components/xp/form-edit-xp.component';
import { FormXpComponent } from './components/xp/form-xp.component';


//Hago la importacion de cada componente para luego rutearlo
//....

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'create-xp', component: FormXpComponent},
  {path:'update-xp/:idExperiencia', component: FormEditXpComponent},
  {path:'create-educacion', component: FormNewEduComponent},
  {path:'update-educacion/:idEducacion', component: FormEditEduComponent},
  {path:'create-skill', component: FormNewSkillComponent},
  {path:'update-skill/:idSkill', component: FormEditSkillComponent},
  {path:'create-project', component: FormNewProjectComponent},
  {path:'update-project/:idProyecto', component: FormEditProjectComponent},
  {path:'update-persona/:idPersona', component: FormEditPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
