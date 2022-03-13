import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardKey } from 'src/app/core/model/chapter.model';

import { NpmComponent } from '../../modules/demo/components/npm/npm.component';
import { AngularCmdComponent } from '../../modules/demo/components/angular-cmd/angular-cmd.component';
import { HtmlBaliseComponent } from '../../modules/demo/components/html-balise/html-balise.component';
import { CssComponent } from '../../modules/demo/components/css/css.component';
import { JavascriptComponent } from '../../modules/demo/components/javascript/javascript.component';
import { TypescriptExampleComponent } from '../../modules/demo/components/typescript-example/typescript-example.component';
import { HtmlBindingComponent } from '../../modules/demo/components/html-binding/html-binding.component';
import { ComponentExampleComponent } from '../../modules/demo/components/component-example/component-example.component';
import { PromiseExampleComponent } from '../../modules/demo/components/promise-example/promise-example.component';
import { RxjsExampleComponent } from '../../modules/demo/components/rxjs-example/rxjs-example.component';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private _ref: any = null;

  constructor(public dialog: MatDialog) { }

  open(key: CardKey) {
    this.close();

    switch (key) {
      case 'npm': this._ref = this.dialog.open(NpmComponent); break;
      case 'angular-project': this._ref = this.dialog.open(AngularCmdComponent); break;
      case 'html-balise': this._ref = this.dialog.open(HtmlBaliseComponent); break;
      case 'css': this._ref = this.dialog.open(CssComponent); break;
      case 'javascript': this._ref = this.dialog.open(JavascriptComponent); break;
      case 'typescript': this._ref = this.dialog.open(TypescriptExampleComponent); break;
      case 'html': this._ref = this.dialog.open(HtmlBindingComponent); break;
      case 'component': this._ref = this.dialog.open(ComponentExampleComponent); break;
      case 'promise': this._ref = this.dialog.open(PromiseExampleComponent); break;
      case 'rxjs': this._ref = this.dialog.open(RxjsExampleComponent); break;
    }
  }

  close(): void {
    if (this._ref != null) {
      this._ref.close();
    }
  }
}
