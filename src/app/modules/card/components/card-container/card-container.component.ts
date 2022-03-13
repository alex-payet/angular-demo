import { Component, OnInit, Input } from '@angular/core';
import { Chapter } from 'src/app/core/model/chapter.model';

@Component({
  selector: 'apt-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  @Input() public chapter : Chapter = new Chapter();

  constructor() { }

  ngOnInit(): void {
  }

}
