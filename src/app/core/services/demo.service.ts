import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CardKey } from 'src/app/core/model/chapter.model';

import { NpmComponent } from '../../modules/demo/components/npm/npm.component';
import { AngularCmdComponent } from '../../modules/demo/components/angular-cmd/angular-cmd.component';
import { HtmlBaliseComponent } from '../../modules/demo/components/html-balise/html-balise.component';
import { CssComponent } from '../../modules/demo/components/css/css.component';
import { JavascriptComponent } from '../../modules/demo/components/javascript/javascript.component';
import { TypescriptExampleComponent } from '../../modules/demo/components/typescript-example/typescript-example.component';
import { HtmlBindingComponent } from '../../modules/demo/components/html-binding/html-binding.component';
import { PromiseExampleComponent } from '../../modules/demo/components/promise-example/promise-example.component';
import { RxjsExampleComponent } from '../../modules/demo/components/rxjs-example/rxjs-example.component';
import { AngularComponent } from 'src/app/modules/demo/components/angular/angular.component';
import { ComponentDetailedComponent as DetailedComponent } from 'src/app/modules/demo/components/component-detailed/component-detailed.component';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private _ref: any = null;

  constructor(public dialog: MatDialog) {
    // this.open('component');
  }

  open(key: CardKey) {
    this.close();
    const config: MatDialogConfig = {
      height: 'auto',
      width: '70%'
    }

    switch (key) {
      case 'npm': this._ref = this.dialog.open(NpmComponent, config); break;
      case 'angular-project': this._ref = this.dialog.open(AngularCmdComponent, config); break;
      case 'html': this._ref = this.dialog.open(HtmlBaliseComponent, config); break;
      case 'css': this._ref = this.dialog.open(CssComponent, config); break;
      case 'javascript': this._ref = this.dialog.open(JavascriptComponent, config); break;
      case 'typescript': this._ref = this.dialog.open(TypescriptExampleComponent, config); break;
      case 'angular': this._ref = this.dialog.open(AngularComponent, config); break;
      case 'component': this._ref = this.dialog.open(HtmlBindingComponent, config); break;
      case 'component-detailed': this._ref = this.dialog.open(DetailedComponent, config); break;
      case 'promise': this._ref = this.dialog.open(PromiseExampleComponent, config); break;
      case 'rxjs': this._ref = this.dialog.open(RxjsExampleComponent, config); break;
    }
  }

  close(): void {
    if (this._ref != null) {
      this._ref.close();
    }
  }
}
