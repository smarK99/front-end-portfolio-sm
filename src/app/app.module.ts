import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ArticleComponent } from './components/article/article.component';
import { BannerNProfileComponent } from './components/banner-n-profile/banner-n-profile.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { ApLogoComponent } from './components/ap-logo/ap-logo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PersonalInfoPanelComponent } from './components/personal-info-panel/personal-info-panel.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialMediaBarComponent } from './components/social-media-bar/social-media-bar.component';
import { TagsComponent } from './components/tags/tags.component';
import { XpComponent } from './components/xp/xp.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
//Para trabajar con formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Para conectar con el backend
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor';
import { FormXpComponent } from './components/xp/form-xp.component';
import { FormEditXpComponent } from './components/xp/form-edit-xp.component';
import { FormNewEduComponent } from './components/education/form-new-edu.component';
import { FormEditEduComponent } from './components/education/form-edit-edu.component';
import { FormNewSkillComponent } from './components/skills/form-new-skill.component';
import { FormEditSkillComponent } from './components/skills/form-edit-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ArticleComponent,
    BannerNProfileComponent,
    EducationComponent,
    FooterComponent,
    LoginComponent,
    BtnLoginComponent,
    ApLogoComponent,
    NavBarComponent,
    PersonalInfoPanelComponent,
    ProjectsComponent,
    SkillsComponent,
    SocialMediaBarComponent,
    TagsComponent,
    XpComponent,
    HomeComponent,
    FormXpComponent,
    FormEditXpComponent,
    FormNewEduComponent,
    FormEditEduComponent,
    FormNewSkillComponent,
    FormEditSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),//Para poner parametros por defecto
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
