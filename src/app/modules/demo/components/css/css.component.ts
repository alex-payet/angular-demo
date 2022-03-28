import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apt-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  public idElement: string = `div {
    border: 1px solid red;
}`;
  public idSelector: string = `#myID {
    background: linear-gradient(blue, pink);
}`;

  public idExample: string = `<div id="myID"></div>`;

  public classSelector: string = `.myClassSelector {
    background: linear-gradient(red, orange);
}`;

  public classExample: string = `<div class="myClassSelector"></div>`;

  public attributSelector: string = `input[type=number] {
    border: 2px solid red;
}`;

  public attributExample: string = `<input type="text"/><input type="number"/>`;

  public pseudoClassSelector: string = `div {
  border: 4px solid red;
}
div:hover {
  background-color: #F89B4D;
}`;

  public endOfGameEnable : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.endOfGameEnable = !this.endOfGameEnable;
  }

}
