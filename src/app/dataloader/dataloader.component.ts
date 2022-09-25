import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dataloader',
  templateUrl: './dataloader.component.html',
  styleUrls: ['./dataloader.component.css']
})
export class DataloaderComponent implements OnInit {
  file : any;

  constructor() { }

  ngOnInit(): void {
  }

  fileChanged(e : any) {
    this.file = e.target.files[0];
    this.readFile(this.file);
  }
  readFile(file : File) {
    let reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
    }
    reader.readAsText(file);
  }

}
