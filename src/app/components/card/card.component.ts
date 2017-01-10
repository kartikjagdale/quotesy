import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() quote: any;
  @Input() index: any;
  constructor() { }

  ngOnInit() {
  }

}
