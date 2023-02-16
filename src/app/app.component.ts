import {Component, OnInit} from '@angular/core';
import {Dog} from "./shared/models/Dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.doggies = this.fetchDoggos();
  }

  title = 'SDA Front-End practice';
  toShow = true;

  fruits = ["apple", "banana", "Strawberry", "Pineapple"]

  doggies: Dog[] = [];
  dogNames: string[] = ['Potsa', 'Muki', 'Reks'];
  dogTitle = 'List of Dogs';


  fetchDoggos(): Dog[] {
    let doggos: Dog[] = [];

    doggos.push(new Dog('Pontu', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Pitsu', 'German Shepperd', 'Eats less'));

    return doggos;
  }

  showAlertBox() {
    alert("Wof! Woof!");
  }

  addDog() {
    let dogName = this.dogNames.at(Math.floor(Math.random() * this.dogNames.length));
    // @ts-ignore
    this.doggies.push(new Dog(dogName, 'Dalmian', 'Barks louder'))
  }

}
