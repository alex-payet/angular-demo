import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apt-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {

  public moduleDesc : string  = `import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { XXXComponent } from './components/xxx.component.ts';

@NgModule({
  declarations: [
    // Déclaration des composants utilisés
    XXXComponent,
  ],
  imports: [
    // Import des composants extérieur (généralement les libs)
    FlexLayoutModule
  ],
  providers: [
    // Les services importé et leurs configurations par défaut (optionnel)
  ],
  exports: [
    // Les composants exportés.
    XXXComponent
  ]
};
export class XXXModule { }`;

public compoDesc : string  = `@Component({
  selector: 'apt-xxx',
  templateUrl: './xxx.component.html',
  styleUrls: ['./xxx.component.css']
})
export class XXXComponent {

  constructor(private xxxService: XxxService) {
    this.xxxService.doSomething(); // Injectable service
  }
}
`;

public compoInjectDesc : string  = `<div>
  <apt-xxx></apt-xxx>
<div>`;

public seviceDesc : string  = `import { Injectable } from '@angular/core';
import { YyyService } from './yyy.service';

@Injectable({
  providedIn: 'root'
})
export class XxxService {

  constructor(private yyyService: YyyService) {
    this.yyyService.doSomething(); // Injectable service
  }
`;

public routeDesc : string  = `iimport { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`;

}
