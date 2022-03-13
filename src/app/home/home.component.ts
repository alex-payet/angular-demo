import { Component, OnInit } from '@angular/core';
import { Chapter } from '../core/model/chapter.model';
import { ChapterFactoryService } from '../core/services/chapter-factory.service';

@Component({
  selector: 'apt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public chapters : Array<Chapter>= [];
  
  constructor(private chapterFactory : ChapterFactoryService) { }

  ngOnInit(): void {
    this.chapters = this.chapterFactory.get();
  }

}
