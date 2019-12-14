import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character = {
    nom: "Spacelord",
    level : 999,
    coins : 1000000,
    path : '../../img/character.png',
    spacecraft : '../../img/spacecraft.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
