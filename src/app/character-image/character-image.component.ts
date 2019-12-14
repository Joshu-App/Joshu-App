import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-image',
  templateUrl: './character-image.component.html',
  styleUrls: ['./character-image.component.css']
})
export class CharacterImageComponent implements OnInit {

  constructor() { }

  innerWidth;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}


