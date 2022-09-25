import { Component, OnInit, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { Chess } from 'chess.js';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dataloader',
  templateUrl: './dataloader.component.html',
  styleUrls: ['./dataloader.component.css']
})
export class DataloaderComponent implements OnInit {
  @Output() item_event = new EventEmitter<string>();

  file : any;

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
     this.item_event.emit(value);
  }

  fileChanged(e : any) {
    this.file = e.target.files[0];
    this.readFile(this.file);
  }

  readFile(file : File) {
    let reader = new FileReader();
    let read : string;
    reader.onload = () => {
      read = reader.result!.toString();
      this.addNewItem(read);
    }
    reader.readAsText(file);
  }

}
