import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public turn: string = 'X';
  public isGameOver: boolean = false;
  private gameWinner: string = 'X';


  constructor() { }

  ngOnInit() {
  }

  changeTurn() {
    console.log('turn changed')
    console.log(this.turn === 'X')
    this.turn = this.turn === 'X' ? 'O' : 'X';
  }

  handleGameWin(winner) {
    console.log(winner)
    this.gameWinner = winner;
    this.isGameOver = true;
  }

}
