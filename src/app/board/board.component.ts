import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() turn: string;
  @Input() isGameOver: boolean;
  @Output() squareClicked = new EventEmitter<any>();
  @Output() gameWon = new EventEmitter<string>();

  public squareValues: string[] = new Array(9);

  constructor() { }

  ngOnInit() {
  }

  setSquareValue(index) {
    this.squareClicked.emit();
    this.squareValues[index] = this.turn;
    this.turn = this.turn === 'X' ? 'O' : 'X';
    let winner = this.calculateWinner();
    if (winner) {
      this.gameWon.emit(winner)
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squareValues[a] && this.squareValues[a] === this.squareValues[b] && this.squareValues[a] === this.squareValues[c]) {
        return this.squareValues[a];
      }
    }
  return null;
}

}
