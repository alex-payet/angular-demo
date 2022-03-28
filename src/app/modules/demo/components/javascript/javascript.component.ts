import { Component, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'apt-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements AfterContentChecked {

  public varJs: string = `  // How to create variables:
  var x;
  let y;
  
  // How to use variables:
  x = 5;
  y = 6;
  let z = x + y;
  document.getElementById("varJsDemo").innerHTML = z;
  `;

  public exJs: string = `<div id="varJsDemo">11</div>`;

  public fctJs: string = `function calcRectArea(width, height) {
    return width * height;
  }
  document.getElementById("fctJsDemo").innerHTML = calcRectArea(10, 10);
  `;
  public exfctJs: string = `<div id="fctJsDemo"></div>`;

  public eventJs: string = `var contenu = document.getElementById("eventJsDemo").innerHTML;
elem.addEventListener('click', function(event) { 
  event.preventDefault();
  elem.innerHTML = parseInt(contenu) + 1 + "";  
});`;
  public exEventJs: string = `<div id="eventJsDemo">0</div>`;

  public objJs: string = `let card = {
  name: 'Gtx 1050 ti',
  constructor: 'Nvidia',
  year: 2016
};

card.cuda; // undefined

card["name"] = "Rtx 3090 ti";
`;

  constructor() { }

  ngAfterContentChecked(): void {
    this.executeVarJs();
    this.executeFctJs();
    this.executeEventJs();
  }

  private executeEventJs() : void {
    var elem = document.getElementById("eventJsDemo");
    if (elem != null ) {
      var contenu = elem.innerHTML;
      elem.addEventListener('click', function(event) { 
        event.preventDefault();
        if (elem) {
          elem.innerHTML = parseInt(contenu) + 1 + "";  
        }
    });
    }
  }
  private executeFctJs() : void {
    var elem = document.getElementById("fctJsDemo");
    if (elem != null ) {
      elem.innerHTML = calcRectArea(10, 10)+"";
    }
  }

  private executeVarJs() : void {
    var x;
    let y;
    x = 5;
    y = 6;
    let z = x + y;
    var elem = document.getElementById("varJsDemo");
    if (elem != null ) {
      elem.innerHTML = z+"";
    }
  }

}

function calcRectArea(width : any, height: any) {
  return width * height;
}
