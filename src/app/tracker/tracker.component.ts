import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.component';

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
}
