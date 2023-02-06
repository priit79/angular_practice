import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA Front-End practice';
  toShow = true;

  fruits = ["apple", "banana", "Strawberry", "Pineapple"]

  showAlertBox() {
    alert("Click me is clicked");




  }
}
