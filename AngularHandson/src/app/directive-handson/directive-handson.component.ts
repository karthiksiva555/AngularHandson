import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-handson',
  templateUrl: './directive-handson.component.html',
  styleUrls: ['./directive-handson.component.css']
})
export class DirectiveHandsonComponent implements OnInit {
  showDetails:boolean=false;
  noOfClicks:number = 0;
  logs = [];
  constructor() {}
  ngOnInit() {
  }
  onDisplayDetailsClick(){
    this.showDetails = !this.showDetails;
    this.logs.push(++this.noOfClicks);
  }
}
