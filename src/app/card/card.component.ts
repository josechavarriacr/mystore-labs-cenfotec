
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any = [] ;
  @Input() showCount = false;
  @Output() calCount = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
    this.calCount.emit(this.data?.length);
  }

}
