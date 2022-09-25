import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chess } from 'chess.js';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // TODO: King and Queen are flipped 
  board: Array<Array<String>> = [
    ["r_b", "n_b", "b_b", "k_b", "q_b", "b_b", "n_b", "r_w"],
    ["p_b", "p_b", "p_b", "p_b", "p_b", "p_b", "p_b", "p_b"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p_w", "p_w", "p_w", "p_w", "p_w", "p_w", "p_w", "p_w"],
    ["r_w", "n_w", "b_w", "q_w", "k_w", "b_w", "n_w", "r_w"]
  ];

  chess: Chess = new Chess;
  chess2: Chess = new Chess;
  moves: Array<String> = [];


  constructor() {
  }

  current_move = 0;

  ngOnInit(): void {
    const pgn = [
      '[Event "Casual Game"]',
      '[Site "Berlin GER"]',
      '[Date "1852.??.??"]',
      '[EventDate "?"]',
      '[Round "?"]',
      '[Result "1-0"]',
      '[White "Adolf Anderssen"]',
      '[Black "Jean Dufresne"]',
      '[ECO "C52"]',
      '[WhiteElo "?"]',
      '[BlackElo "?"]',
      '[PlyCount "47"]',
      '',
      '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O',
      'd3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4',
      'Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6',
      'Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8',
      '23.Bd7+ Kf8 24.Bxe7# 1-0'
    ]

    this.chess.loadPgn(pgn.join('\n'));
    this.updateBoard(this.chess2);
  }

  movePiece(): void {
    if (!this.chess2.isGameOver()) {
      let history = this.chess.history({ verbose: true });
      this.chess2.move(history[this.current_move]);
      this.updateBoard(this.chess2);
      this.moves.push(this.chess2.fen());
      this.current_move++;
    }
  }

  moveBackwards(): void {
    if(this.current_move > 0)  {
      this.current_move--;
      this.chess2.undo();
      this.updateBoard(this.chess2);
    }
  }

  updateBoard(chess: Chess): void {
    const board = chess.board();
    console.log(board);
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] != null) {
          let type = board[i][j]?.type;
          let piece = type + "_" + board[i][j]!.color;
          this.board[i][j] = "assets/" + piece + ".png";
        } else {
          this.board[i][j] = "assets/Empty.png";
        }
      }
    }
  }

  loadPgn(data: string): void {
    this.current_move = 0;
    this.chess.loadPgn(data);
    this.updateBoard(this.chess2);
  }
}
