import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info-panel',
  templateUrl: './personal-info-panel.component.html',
  styleUrls: ['./personal-info-panel.component.css']
})
export class PersonalInfoPanelComponent implements OnInit {

  private fullName:string = "Santiago Marquez";
  private title:string = "Full Stack Developer Jr.";
  private address:string = "Mendoza, Argentina";
  private contact:string = "marquezDevs@gmail.com";

  constructor() { 

  }

  ngOnInit(): void {

  }

  public getFullName():string{
    return this.fullName;
  }

  public getTitle():string{
    return this.title;
  }

  public getAddress():string{
    return this.address;
  }

  public getContact():string{
    return this.contact;
  }


}
