import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins = 999999999
  level = 20

  constructor() { }

  ngOnInit() {
  }

}
