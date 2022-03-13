import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

import { NpmComponent } from './components/npm/npm.component';
import { AngularCmdComponent } from './components/angular-cmd/angular-cmd.component';
import { HtmlBaliseComponent } from './components/html-balise/html-balise.component';
import { CssComponent } from './components/css/css.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { HtmlBindingComponent } from './components/html-binding/html-binding.component';
import { ComponentExampleComponent } from './components/component-example/component-example.component';
import { PromiseExampleComponent } from './components/promise-example/promise-example.component';
import { RxjsExampleComponent } from './components/rxjs-example/rxjs-example.component';
import { TypescriptExampleComponent } from './components/typescript-example/typescript-example.component';

@NgModule({
  declarations: [
    NpmComponent,
    AngularCmdComponent,
    HtmlBaliseComponent,
    CssComponent,
    JavascriptComponent,
    HtmlBindingComponent,
    ComponentExampleComponent,
    PromiseExampleComponent,
    RxjsExampleComponent,
    TypescriptExampleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class DemoModule { }
