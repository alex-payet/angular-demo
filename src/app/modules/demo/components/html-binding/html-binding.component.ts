import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'apt-html-binding',
  templateUrl: './html-binding.component.html',
  styleUrls: ['./html-binding.component.css']
})
export class HtmlBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.launchTimer();
  }

  private launchTimer(): void {
    interval(2_000).subscribe(() => {
      this.dynamicData++;
      this.verify();
    });
  }

  public modifyTimer(inc : boolean): void {
    if ( inc ) {
      this.dynamicData++;
    } else {
      this.dynamicData--;
    }
  }

  public verify() : void {
    this.result = this.dynamicData % this.value === 0;
    if( this.result ) {
        this.value = 0;
    }
  }
  
  public staticData: string = "Hello world!";
  public staticCode: string = `public simple: string = "Hello world!"`;
  public staticTemplate: string = `<span>{{staticData}}</span>`;

  public dynamicData: number = 0;
  public dynamicCode: string = `  public dynamicData: number = 0;
  
  private launchCounter(): void {
    interval(2_000).subscribe(() => this.dynamicData++);
  }`;
  public dynamicTemplate: string = `<span>Count : {{dynamicData}}</span>`;

  public propertieCode: string = `import { ... Input , OnChanges } from '@angular/core';
@Component({...})
export class ComponentExampleComponent implements OnChanges {
  
  @Input() public dynamicInputData : number = 0;
  public onChangeData : string = "";
  ...
  ngOnChanges() : void {
    if (this.dynamicInputData > 10 && this.onChangeData === "") {
      this.onChangeData = "Variable supérieure à 10 => ";
    }
  }

  public decrement(): void {
    this.dynamicInputData--; // Simple change Data not working
  }

  public increment(): void {
    this.dynamicInputData++; // Simple change Data not working
  }
}`;

  public propertieTemplate: string = `<span *ngIf="onChangeData === ''">"dynamicInputData : "</span>
<span *ngIf="onChangeData !== ''">{{onChangeData}}</span>
<span>{{dynamicInputData}}</span>`;

  public propertieParentTemplate: string = `<apt-component-example [dynamicInputData]="dynamicData">
  </apt-component-example>`;

  public eventCode: string = `import { ... Output, EventEmitter } from '@angular/core';
@Component({...})
export class ComponentExampleComponent implements OnChanges {
  @Output() changeData = new EventEmitter<boolean>();

  ...

  public eventAction(inc : boolean): void {
    this.changeData.emit(inc); // Event changeData
  }
}`;

public eventTemplate: string = `<button (click)="eventAction(false)"></button>
<button (click)="eventAction(false)"></button>`;

public eventParentTemplate: string = `<apt-component-example 
  [dynamicInputData]="dynamicData" 
  (changeData)="modifyTimer($event)"
></apt-component-example>`;

public eventParentCode: string = `public modifyTimer(inc : boolean): void {
  if ( inc ) {
    this.dynamicData++;
  } else {
    this.dynamicData--;
  }
}`;

  public value: number = 0;
  public result: boolean = false;

  
public ngModelCode: string = `public value: number = 0;
public result: boolean = false;

public verify() : void {
  this.result = this.dynamicData % this.value === 0;
  if( this.result ) {
      this.value = 0;
  }
}`;

public ngModelTemplate: string = `<input id="value" [(ngModel)]="value" (ngModelChange)="verify()" placeholder="Valeur">
<div>{{dynamicData}} est multiple de {{value} }=> {{result}}</div>`;

}
