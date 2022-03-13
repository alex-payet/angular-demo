import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/core/model/chapter.model';
@Component({
  selector: 'apt-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.css']
})
export class CardSimpleComponent implements OnInit {

  @Input() public topic: Topic = new Topic();
  constructor() { }

  ngOnInit(): void {
  }

}
