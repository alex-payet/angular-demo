import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/core/model/chapter.model';

@Component({
  selector: 'apt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public topic: Topic = new Topic();
  public selected : boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  toggle() {
    this.selected = !this.selected;
  }
}
