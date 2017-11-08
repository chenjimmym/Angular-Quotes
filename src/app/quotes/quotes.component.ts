import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class QuotesComponent implements OnInit {

  @Input() myListOfQuotes;

  constructor() { }

  ngOnInit() {
    console.log("!!!!!!", this.myListOfQuotes);
  }

  ngOnChanges() {
    this.myListOfQuotes;
    console.log("@@@", this.myListOfQuotes);
  }
}
