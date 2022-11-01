import { Component, OnInit } from '@angular/core';
import { Xp } from 'src/app/model/xp';
import { TokenService } from 'src/app/service/token.service';
import { XpService } from 'src/app/service/xp.service';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {
  xp: Xp[] = [];

  constructor(private xps: XpService, private token: TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.loadXp();
    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  loadXp(): void{
    this.xps.list()
      .subscribe(data => {this.xp = data;})
  }

  //Solucionar problema con el err
  delete(idExp?: number): void{
    if(idExp != undefined){
      this.xps.delete(idExp).subscribe(
        data => {
          this.loadXp();
        }, err => {
          this.loadXp();
          alert("Experiencia agregada exitosamente!");
        }
      )
    }
  }
  
}

