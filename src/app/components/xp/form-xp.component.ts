import { Component, OnInit } from '@angular/core';
import { XpService } from 'src/app/service/xp.service';
import { Router } from '@angular/router';
import { Xp } from 'src/app/model/xp';

@Component({
  selector: 'app-form-xp',
  templateUrl: './form-xp.component.html',
  styleUrls: ['./form-xp.component.css']
})
export class FormXpComponent implements OnInit {
  nombreExp: string = "";
  descripcionExp: string="";

  constructor(private xps: XpService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const xp = new Xp(this.nombreExp, this.descripcionExp);
    this.xps.create(xp).subscribe(
      data => {
      alert("Experiencia agregada exitosamente!");
      this.router.navigate(['']);
    }, err => { 
      alert("No se pudo crear la experiencia.");
      this.router.navigate(['']);
    }
    )
  }

}
