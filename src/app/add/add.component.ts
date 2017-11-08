import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  quote = {message:"", author:"", rating:0};
  @Output() emitQuote = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  
  addQuote() {
    this.emitQuote.emit(this.quote);
    this.quote = {message:"", author:"", rating:0};
  }

}
