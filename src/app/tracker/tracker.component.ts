import { Component, Input, OnInit } from '@angular/core';
import { Chess, Move } from 'chess.js';
import { BoardComponent } from '../board/board.component';
import { MoveParser } from './move_parser';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  @Input() board = new Chess();

  data = new Array<Data>();
  turn = 0;

  constructor() {
  }

  ngOnInit(): void {
   
  }

  getParse(move: string, index: number ): string {
    let color = "w";
    console.log(this.board.history().pop());
    this.data.push(new Data(this.board.history().pop()!.toString(), this.board.turn()));
    if(index % 2 != 0)
      color = "b"
    let str = MoveParser.getPiecePng(move, color);
    this.turn += 1;
    return str;
  }
}

class Data {
  move! : string;
  color! : string;

  constructor(move : string, color : string) {
    this.move = move;
    this.color = color;
  }
}