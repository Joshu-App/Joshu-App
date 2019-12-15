import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-description',
  templateUrl: './ship-description.component.html',
  styleUrls: ['./ship-description.component.css']
})
export class CharacterDescriptionComponent implements OnInit {

  constructor() { }

  name: string;
  fuerza: number = 20
  velocidad: number = 70
  inteligencia : number = 100

  ngOnInit() {
    this.name = "AZT198"
    this.fuerza = 20;
    this.velocidad = 70;
    this.inteligencia = 100
  }

}
