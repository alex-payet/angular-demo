import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apt-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: ['./card-logo.component.css']
})
export class CardLogoComponent implements OnInit {

  @Input() public logo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
