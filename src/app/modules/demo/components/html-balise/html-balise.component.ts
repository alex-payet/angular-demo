import { Component, OnInit } from '@angular/core';
import { HighlightJS } from 'ngx-highlightjs';

@Component({
  selector: 'apt-html-balise',
  templateUrl: './html-balise.component.html',
  styleUrls: ['./html-balise.component.css']
})
export class HtmlBaliseComponent implements OnInit {

  public structure : string  = `<html>
  <head>
    <script>js</script>
    <style>css</style>
    <title>ANGULAR DEMO - SII</title>
  </head>
  <body>...</body>
</html>`;

  public div : string  = `<div>Trap l'un</div>
<div>Trap l'autre</div>`;
  public span : string  = `<span>Trap l'un</span>
<span>Trap l'autre</span>`;
  public table : string  = 
`<table>
  <thead>
      <tr>
          <th>Col. 1</th>
          <th>Col. 2</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Ligne 1 Col 1</td>
          <td>Ligne 1 Col 2</td>
      </tr>
      <tr>
        <td>Ligne 2 Col 1</td>
        <td>Ligne 2 Col 2</td>
      </tr>
  </tbody>
</table>`;
  public form : string  = 
`<form>
  <div>
    <label for="name">Rent' out nom: </label>
    <input id="name" type="text" required>
  </div>
  <div>
    <label for="pwd">Met' out pass: </label>
    <input id="pwd" type="password" required>
  </div>
  <div>
    <label for="age">Kel age ou na n'as ? </label>
    <input id="age" type="number" min="10" max="100">
  </div>
  <div>
    <label for="picture">Met' out tête ici </label>
    <input id="picture" type="file">
  </div>
  <div>
    <label for="loisir">Koi fé ?</label>
    <select id="loisir">
      <option>Batail coq</option>
      <option>Mange carry</option>
      <option>Thun mon 106</option>
    </select>
  </div>
    <div></div>
    <div><button><span>Allons rôdé !</span></button></div>
  </div>
</form>`;

  constructor(private hljs: HighlightJS) { }

  ngOnInit(): void {
  }

}
