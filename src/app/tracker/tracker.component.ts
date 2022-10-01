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
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  getParse(move : string, color : string): string {
    let str =  MoveParser.getPiecePng(move, color);
    return str;
  }

  loadAtMove() : void {
    
  }
}
