import { Component, OnInit, Input } from '@angular/core';
import { Topic } from 'src/app/core/model/chapter.model';
import { DemoService } from 'src/app/core/services/demo.service';

@Component({
  selector: 'apt-card-face',
  templateUrl: './card-face.component.html',
  styleUrls: ['./card-face.component.css']
})
export class CardFaceComponent implements OnInit {

  @Input() public topic: Topic = new Topic();
  public title: string = "";

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.title = this.topic.key;
    if (this.topic.key == 'angular-project') {
      this.title = "Angular";
    }
    if (this.topic.key == 'html-balise') {
      this.title = "Balise";
    }

  }

  open(): void {
    this.demoService.open(this.topic.key);
  }
}
