import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'quot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() quote: Quote;
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit a Event when a Next button is clicked 
   * and inform parent component so, specified action
   * can be taken;
   * 
   * @method nextClicked
   * 
   * @return next Event
   */
  nextClicked(){
    this.next.emit();    
  }
}
