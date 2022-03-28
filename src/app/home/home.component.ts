import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion'
import { Chapter } from '../core/model/chapter.model';
import { ChapterFactoryService } from '../core/services/chapter-factory.service';
import { ChapterService } from '../core/services/chapter.service';

@Component({
  selector: 'apt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  code = `function myFunction() {
    document.getElementById("demo1").innerHTML = "Test 1!";
    document.getElementById("demo2").innerHTML = "Test 2!";
  }`;
  
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion;

  public chapters : Array<Chapter>= [];
  public open : boolean = false;
  
  constructor(private chapterService : ChapterService) { }

  ngOnInit(): void {
    this.chapters = this.chapterService.datas;
  }

  toggle() : void {
    this.open = !this.open;
    if ( this.open) {
      this.accordion.openAll();
    } else {
      this.accordion.closeAll();
    }
  }
}
