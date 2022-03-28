import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {tap} from 'rxjs/operators';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';

@Component({
  selector: 'apt-html-binding',
  templateUrl: './html-binding.component.html',
  styleUrls: ['./html-binding.component.css']
})
export class HtmlBindingComponent implements OnInit {


  public formG : FormGroup ;
  public dataJson : string = "" ;

  constructor(private fb : FormBuilder) {
    this.formG = this.fb.group({
      name: ['', Validators.required],
      pwd: ['', Validators.required],
      age: ['', [Validators.min(10), Validators.max(99)]],
      picture: [''],
      loisir: ['', Validators.required]
    });
    
   }

  ngOnInit(): void {
    this.launchTimer();
    this.formG.valueChanges.subscribe(value => {this.dataJson = JSON.stringify(value,null,'\t')});
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

public reactiveTemplate: string = `<form [formGroup]="formG">

  <label for="name">Rent' out nom: </label>
  <input id="name" type="text" formControlName="name">

  <label for="pwd">Met' out pass: </label>
  <input id="pwd" type="password" required formControlName="pwd">

  <label for="age">Kel age ou la n'as ?</label>
  <input id="age" type="number" min="10" max="100" formControlName="age">

  <label for="picture">Met' out tête ici</label>
  <input id="picture" type="file" formControlName="picture">

  <label for="loisir">Koi fé ?</label>
  <select id="loisir" formControlName="loisir">
    <option>Batail coq</option>
    <option>Mange carry</option>
    <option>Thun mon 106</option>
  </select>
  <button [disabled]="!formG.valid"><span>Allons rôdé !</span></button>
</form>`;

public reactiveCode: string = `  public formG : FormGroup ;
public dataJson : string = "" ;

constructor(private fb : FormBuilder) {
  this.formG = this.fb.group({
    name: ['', Validators.required],
    pwd: ['', Validators.required],
    age: ['', [Validators.min(10), Validators.max(99)]],
    picture: [''],
    loisir: ['', Validators.required]
  });
  
 }
 
ngOnInit(): void {
  this.formG.valueChanges.subscribe(value => {this.dataJson = JSON.stringify(value)});
}`;
}
