import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
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
import { NyanCatComponent } from './components/nyan-cat/nyan-cat.component';
import { AngularComponent } from './components/angular/angular.component';
import { ComponentDetailedComponent } from './components/component-detailed/component-detailed.component';

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
    TypescriptExampleComponent,
    NyanCatComponent,
    AngularComponent,
    ComponentDetailedComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,

    HighlightModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
    }
  }]
})
export class DemoModule { }
