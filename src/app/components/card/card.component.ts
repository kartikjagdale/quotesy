import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'quot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
