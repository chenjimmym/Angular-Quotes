import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfQuotes = [];
  newListOfQuotes;
  newQuote(data){
    this.listOfQuotes.push(data);
    this.newListOfQuotes = this.listOfQuotes;
    console.log(this.listOfQuotes);
  }
}
