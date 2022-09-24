import { Component, OnInit } from '@angular/core';
import { Move } from 'chess.js';
import { BoardComponent } from '../board/board.component';
import { MoveParser } from './move_parser';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  board: BoardComponent;

  constructor(board: BoardComponent) { 
    this.board = board;
    console.log("Tracker:");
    console.log(board);
  }

  ngOnInit(): void {
  }

  getParse(move : string, color : string): string {
    let str =  MoveParser.getPiecePng(move, color);
    console.log(str);
    return str;
  }

  loadAtMove() : void {
    
  }
}
