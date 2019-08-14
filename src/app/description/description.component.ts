import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['firstPerson', 'secondPerson'],
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  couple = {
    firstPerson: "",
    secondPerson: '',
    phrase: ''
  }

  matchCouple() {
    this.couple.phrase = this.couple.firstPerson + " and " + this.couple.secondPerson + " will be a great couple!";

  }

  ngOnInit() {
  }

}
