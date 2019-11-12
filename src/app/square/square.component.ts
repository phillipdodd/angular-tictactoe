import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() turn: string;
  @Input() squareIndex: number;
  @Input() isGameOver: boolean;

  @Output() valueEvent = new EventEmitter<number>();

  private value: string;
  private locked: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  setValue() {
    if (!this.locked && !this.isGameOver) {
      this.locked = !this.locked;
      this.value = this.turn;
      this.valueEvent.emit(this.squareIndex);
    }
  }

}
