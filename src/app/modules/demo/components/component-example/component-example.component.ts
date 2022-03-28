import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apt-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.css']
})
export class ComponentExampleComponent implements OnInit, OnChanges {

  @Input() public dynamicInputData: number = 0;
  @Input() public eventExample: boolean = false;
  public onChangeData: string = "";
  @Output() changeData = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
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

  public eventAction(inc : boolean): void {
    this.changeData.emit(inc); // Event changeData
  }
}
